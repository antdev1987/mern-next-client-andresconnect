import Layout from "@/components/Layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
// import { GoogleLogin } from "@react-oauth/google";
import SocialGoogleLogin from "@/components/SocialButton/SocialGoogleLogin";

import { toast } from "react-toastify";
import Link from "next/link";

//this is to get rid of the flash login page if you try to go back when you are authenticated
export async function getServerSideProps(context) {

  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination:  "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Register = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [warningText, setWarningText] = useState();
  const nameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      setWarningText("Email is invalid");
      return;
    }

    if (email.trim().length === 0 || password.trim().length === 0) {
      setWarningText("One field is empty");
      return;
    }
    setWarningText("");



    const result = await signIn("credentials", {
        action:'register',
      name,
      email,
      password,
      redirect: false,
    });


    if (result.error) {
      toast.error(result.error);
    } else {
      router.replace("/");
      toast.success("User Created and Authenticated");
    }
  };



  return (
    <Layout title="Register">
      <section className="py-3">
        <h1 className="text-muted">Registrar</h1>

        <p className="fw-bold">Registrate y comienza a Publicar o Contratar</p>

        <form onSubmit={handleSubmit} className="w-50">
          <legend className="bg-danger text-light text-center fw-bold">
            {warningText}
          </legend>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type='text'
              ref={nameRef}
              className="form-control bg-secondary bg-opacity-10 "
              id="name"
 
            />
       
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              // type="email"
              ref={emailRef}
              className="form-control bg-secondary bg-opacity-10 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Well never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control bg-secondary bg-opacity-10"
              id="exampleInputPassword1"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-dark rounded-0 px-3"
          >
            Register
          </button>
        </form>

        <div className=" w-50 mt-4 text-center">or</div>

        <SocialGoogleLogin />

        <div>
          <span>Ya tienes una cuenta?</span> <Link href={'/login'}>Inicia sesión</Link>
        </div>

        {/* <div className="w-50 py-4 border">
          <div className="d-flex justify-content-center">
            
            {!isLoading ? (
              <GoogleLogin
                className=" disabled"
                clientId={process.env.GOOGLE_ID}
                onSuccess={handleLoginGoogle}
                onError={() => {
                  toast.error("Login Failed");
                }}
              />
            )
          : <div>Loading...</div>
          }


          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default Register;
