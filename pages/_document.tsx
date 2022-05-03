import { ReactElement, ReactFragment } from "react";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      const styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ) as unknown as ReactFragment;
      return {
        ...initialProps,
        styles,
      };
    } catch (_) {
      return {
        html: "",
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
