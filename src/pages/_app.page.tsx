/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';

import { Theme } from '../hooks/Theme';
import 'antd/dist/antd.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <GlobalStyles />
      <Head>
        <title>Dark chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </Theme>
  );
};

export default App;
