import Head from "next/head";
import NavBarComp from "../NavBarComp";


const Layout = ({ title, children }) => {

  

  return (
    <>
      <Head>
        <title>
          {title ? title + "- Andress-Connect" : "Andress-Connect"}
        </title>
        <meta name="description" content="Andress Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="d-flex flex-column vh-100">
        <header>
          <NavBarComp />
        </header>

        <main className="container-fluid  shadow-lg mt-3 flex-fill border">
          {children}
        </main>

        <footer className="text-center py-3">Footer  Andres Connect</footer>
      </div>
    </>
  );
};

export default Layout;