import Document from "next/document";
import Head from "next/document";
import NextScript from "next/document";
import {Html, Main} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => (
            originalRenderPage({
                enhanceApp: App => App,
                enhanceComponent: Component => Component,
            })
        );

        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang={"sv"} charset="utf-8">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;