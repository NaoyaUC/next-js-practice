import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styled from 'styled-components'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>記事一覧</h2>
                <PostList className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <PostLi className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>
                                    {title}
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date} />
                                    </small>
                                </a>
                            </Link>
                        </PostLi>
                    ))}
                </PostList>
            </section>
        </Layout>
    )
}

const PostList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap : 8px;
`
const PostLi = styled.li`
    box-shadow: 0 0 4px #777;
    padding: 8px;
    margin:0;
    &:hover{
        background-color: rgba(255,255,255,0.3);
        transition: .5s;
    }
    a{
        text-decoration: none;
        color:#333;
    }
`