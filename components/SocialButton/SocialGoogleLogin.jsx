import { signIn } from "next-auth/react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";

const SocialGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      // console.log(tokenResponse.access_token);

      const result = await signIn("credentials", {
        action: "google",
        access_token: tokenResponse.access_token,
        redirect: false,
      });

      if (result.error) {
        toast.error(result.error);
      } else {
        router.replace("/");
        toast.success("User Authenticated");
      }
    },

    onNonOAuthError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="w-50 py-4 border">
      <div className="d-flex justify-content-center">
        {!isLoading ? (
          <button
            className="btn btn-outline-danger"
            clientid={process.env.GOOGLE_ID}
            onClick={() => login()}
            onError={() => {
              toast.error("Login Failed");
            }}
          >
            <i className="bi bi-google"></i> Continuar con Google
          </button>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SocialGoogleLogin;
