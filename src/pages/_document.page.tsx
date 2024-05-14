/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import 'dotenv/config';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Add support for styled-components on next.js build. Code copied from https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="aw-spot" />
          <script
            id="adx-tag"
            src="https://t2irhxyhbv.us-east-1.awsapprunner.com/adw.js?t=ADW-651390146fe2a3c9501fd814&h=false&et=false"
            type="text/javascript"
          />
          <script type="text/javascript">adx.load();</script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
