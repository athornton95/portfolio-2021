import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components";
import logo from "../images/ah-logo.png";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Alex Hopkins</title>
        <meta name="description" content="Alex Hopkins Portfolio 2021" />
        <link rel="icon" href={logo} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Heebo:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main className="main">
        <Layout />
      </main>
    </div>
  );
}
