import styles from './layout.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Sidebar from './sidebar'
import Footer from './footer'

const name = 'Naoya Hirata'
export const siteTitle = 'Next.js Sample'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/309/unicorn_1f984.png"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/image/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={60}
                            width={60}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>

                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/image/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            <div className={styles.contents}>
                <div className={styles.main}>
                    {children}

                    {!home && (
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>記事一覧に戻る</a>
                            </Link>
                        </div>
                    )}            
                </div>
                <Sidebar />
            </div>

            <Footer />
        </div>
    )
}