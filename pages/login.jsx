import Layout from "@/components/Layout/Layout";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

//this is to get rid of the flash login page if you try to go back when you are authenticated
export async function getServerSideProps(context) {
  const { query } = context; // get query parameters from context
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: query.redirect === "/shipping" ? "/shipping" : "/",
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

const Login = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [warningText, setWarningText] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // obteniendo los datos y validando
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
      action:'login',
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      toast.error(result.error);
    } else {
      router.replace("/");
      toast.success("User Authenticated");
    }
  };

  const handleLoginGoogle = async (response) => {
    //implementation of the function of login with google using the package @react-oauth/google

    // console.log(response)

    try {
      setIsLoading(true);
      const result = await signIn("google", {
        access_token: response.credential,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Login">
      <section className="py-3">
        <h1 className="text-muted">Sign In</h1>

        <form onSubmit={handleSubmit} className="w-50">
          <legend className="bg-danger text-light text-center fw-bold">
            {warningText}
          </legend>

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
            Log In
          </button>
        </form>

        <div className="w-50 py-4 border">
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
        </div>
      </section>
    </Layout>
  );
};

export default Login;
