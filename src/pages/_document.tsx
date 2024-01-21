import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from "next/document";
import { documentGetInitialProps, DocumentHeadTags, DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter'

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
  };