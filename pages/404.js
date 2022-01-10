import Layout, { siteTitle } from "../components/layout";
import Head from "next/head"
import Link from 'next/link'

// pages/404.js
export default function Custom404() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle} | NotFound</title>
            </Head>

            <h1>404 - Page Not Found</h1>

            <div>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </div>
        </Layout>
    );
}