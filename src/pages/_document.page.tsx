/* eslint-disable react/no-danger */
/* eslint-disable react/style-prop-object */
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
            async
            src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.googletag = window.googletag || {cmd: []};

              googletag.cmd.push(function() {

                googletag.defineSlot('/7298353/Home', [300, 250], 'div-gpt-ad-1716408471946-0').addService(googletag.pubads());

                googletag.pubads().enableSingleRequest();

                googletag.enableServices();

              });
        `,
            }}
          />

          <div id="div-gpt-ad-1716408471946-0">
            <script
              dangerouslySetInnerHTML={{
                __html: `
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1716408471946-0'); });
                `,
              }}
            />
          </div>
          <Main />
          <NextScript />
          <div id="aw-spot" />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
