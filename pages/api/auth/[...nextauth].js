import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";
// import jwt from "jsonwebtoken";
import getError from "@/utils/getError";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialProvider({
      async authorize(credentials, req) {
        if (credentials.action === "login") {
          console.log("aqui aqui");
          try {
            const { data: user } = await axios.post(
              `${process.env.BASE_URL}/user/login`,
              credentials
            );
            // const { token } = user;

            // Verify and decode the token
            // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            return user;
          } catch (error) {
            throw new Error(getError(error));
          }
        }

        if (credentials.action === "google") {
          console.log("in google auth");
          console.log(credentials.access_token);

          try {
            const { data } = await axios.post(
              `${process.env.BASE_URL}/user/googlelogin`,
              { access_token: credentials.access_token }
            );

            console.log(data);

            const user = {
              _id: data._id,
              isVerificationProcess: data.isVerificationProcess,
              email: data.email,
              name: data.name,
              isAdmin: data.isAdmin,
              token: data.token,
            };

            return user;

            return true;
          } catch (error) {
            console.log(error);
          }
        }

        if (credentials.action === "register") {
          console.log("en register");

          try {
            const { data: user } = await axios.post(
              `${process.env.BASE_URL}/user/register`,
              credentials
            );

            console.log(user);
            // const { token } = user;

            // Verify and decode the token
            // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            console.log(user.userAuthenticated);

            return user.userAuthenticated;
          } catch (error) {
            console.log("aqui");
            throw new Error(getError(error));
          }
        }
      },
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    //   usePkce: true,
    // }),
  ],

  callbacks: {
    // signIn: async ({ user, account }) => {

    //   if(account.provider !== "google"){
    //     return true
    //   }

    //   if (account.provider === "google") {
    //     console.log("in google auth");
    //     console.log(account.access_token)
    //     try {
    //       const { data } = await axios.post(
    //         `${process.env.BASE_URL}/user/googlelogin`,
    //         { access_token: account.access_token }
    //       );

    //       const googleAuthData = {
    //         _id: data._id,
    //         email: data.email,
    //         name: data.name,
    //         isAdmin: data.isAdmin,
    //         token: data.token,
    //       };

    //       user.user1 = googleAuthData;

    //       return true;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //  },

    jwt: async ({ token, user, account, profile, trigger, session }) => {
      // Add user info to JWT payload

      if (account?.provider === "credentials") {
        token.user = user;
      }

      if (account?.provider === "google") {
        token.user = user.user1;
      }

      if (trigger === "update") {
        console.log(session);

        token.user.isVerificationProcess = true;
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.user = token.user; // Setting token in session
      return session;
    },
  },

  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    login: "/login", //Need to define custom login page (if using)
  },
});
