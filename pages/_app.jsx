import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { NextUIProvider } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';
import Layout from '../components/Layout';

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <UserProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </UserProvider>
    </SSRProvider>
  );
}
