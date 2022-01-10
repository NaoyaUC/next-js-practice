import Link from 'next/link'
import Head from 'next/head'
import Layout from './components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    ここにテキストが入ります。
                    ここにテキストが入ります。
                    ここにテキストが入ります。
                    ここにテキストが入ります。
                    ここにテキストが入ります。
                    ここにテキストが入ります。
                </p>
            </section>
        </Layout>
    )
}