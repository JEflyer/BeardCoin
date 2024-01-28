import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>BeardCoin</title>
        <meta
          name='description'
          content='BeardCoin - The Future of Digital Currency'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to BeardCoin</h1>

        <p className={styles.description}>The Future of Digital Currency</p>

        {/* ... other content ... */}

        {/* Tokenomics Section */}
        <section className={styles.tokenomics}>
          <h2>Tokenomics</h2>
          <div className={styles.tokenomicsContent}>
            <div>
              <h3>Airdrop Allocation (20%):</h3>
              <p>200 million BeardCoin</p>
            </div>
            <div>
              <h3>DEX (Decentralized Exchange) Liquidity (50%):</h3>
              <p>500 million BeardCoin</p>
            </div>
            <div>
              <h3>Team Funds (10%):</h3>
              <p>100 million BeardCoin</p>
            </div>
            <div>
              <h3>Promotion and Growth (20%):</h3>
              <p>200 million BeardCoin</p>
            </div>
            <div>
              <h3>TAX:</h3>
              <p>NONE</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>BeardCoin &copy; 2024</p>
      </footer>
    </div>
  )
}
