import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import "../lib/hoagie-ui/theme.css"
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const tabs = [
    // {title: "See Menus", href: "/app"}
  ];

  return (
    <UserProvider>
      <Head>
        <title>Menus by Hoagie</title>
      </Head>
      <Theme palette="blue">
      <Layout name="menus" tabs={tabs}>
      <Component {...pageProps} />
      <Footer />
      </Layout>
      </Theme>
    </UserProvider>
  );
}