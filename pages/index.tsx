import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { i18n, text } from '../service/i18n'

type Props = {
  i18nText: i18n
}

/**
 * ホームを画面のコンポーネント
 */
const Home: NextPage<Props> = ({ i18nText }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{i18nText.title}</title>
        <meta name="description" content={i18nText.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {i18nText.greeting}
        </h1>

        <p className={styles.description}>
          {i18nText.guide}
        </p>

        <div className={styles.grid}>
          <Link href="/" locale={i18nText.changeLocale}>
            <a className={styles.card}>
              <h2>{i18nText.changeLanguage}</h2>
            </a>
          </Link>
        </div>
        <div className={styles.supplement}>
          <a href="https://qiita.com/AkiUnleash/items/2b512b7a08b1229a4a88">
            {i18nText.description}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by Aki Unleash
      </footer>
    </div>
  )
}

/**
 * 静的ファイルを事前に作成。 
 */
export function getStaticProps({ locale }) {
  const i18nText = text(locale)
  return { props: { i18nText } }
}

export default Home