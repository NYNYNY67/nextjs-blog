import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.jsを勉強してる人間です</p>
        <p>
          This is a sample website built with Next.js on{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}
