import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from "next-i18next";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>0x4xel - Blog Personal</title>

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/jarallax.css" />
        <link rel="stylesheet" href="css/swiper.css" />
        <link rel="stylesheet" href="css/fontawesome.css" />
        <link rel="stylesheet" href="css/brands.css" />
        <link rel="stylesheet" href="css/solid.css" />
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
        <meta name="linkedin:card" content="summary"/>
        <meta property="og:title" content="Blog personal"/>
        <meta property="og:description" content="¡Hola! soy Axel Losantos Lizaso, Full Stack Developer y
pentester en EY." />
        <meta property="og:image" content="https://www.0x4xel.com/images/perfil/sentado_largo.jpg"/>
        <meta property="og:url" content="https://www.0x4xel.com/"/>

      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  );
}

export default appWithTranslation(MyApp);
