'use client'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import RoadmapPhase from './roadmap'

export default function Home () {
  // Replace with your actual QuickSwap URL and social media links
  const quickSwapUrl =
    'https://quickswap.exchange/#/swap?inputCurrency=YOUR_TOKEN_ADDRESS'

  return (
    <div className='container'>
      <Head>
        <title>BeardCoin</title>
        <meta
          name='description'
          content='BeardCoin - Grow Your Crypto, Grow Your Beard'
        />
        <link rel='icon' href='/beard.ico' />
      </Head>

      <main className='main'>
        <h1 className='title'>BeardCoin</h1>
        <p className='tagline'>Grow Your Crypto, Grow Your Beard</p>
        <Image
          src='/coin.png'
          width={500}
          height={500}
          alt='BeardCoin'
          className='coin-image'
        />

        <p className='description'>
          Tired of memecoins with no purpose? BeardCoin is here to change the
          game. We&apos;re not just about mooning your portfolio, we&apos;re
          about fueling the follicle future.
        </p>

        {/* Call to Action Button */}
        {/* <div className='cta-button-container'>
          <Link
            href={quickSwapUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='buy-now-button'
          >
            Buy BeardCoin Now
          </Link>
        </div> */}

        {/* About Us Section */}
        <section className='about-us pt-8'>
          <h2>About Us</h2>
          <p>
            BeardCoin is a community-driven cryptocurrency for bearded brethren
            around the world. We&apos;re passionate about beards,
            sustainability, and building a badass brotherhood. Join us and
            let&apos;s grow together!
          </p>
        </section>

        {/* Tokenomics Section */}
        <section className='tokenomics'>
          <h2>Tokenomics</h2>
          <div className='tokenomicsContent'>
            <div className='tokenomics-item'>
              <h3>Airdrop Allocation (20%):</h3>
              <p>200 million BeardCoin</p>
            </div>
            <div className='tokenomics-item'>
              <h3>DEX (Decentralized Exchange) Liquidity (50%):</h3>
              <p>500 million BeardCoin</p>
            </div>
            <div className='tokenomics-item'>
              <h3>Team Funds (10%):</h3>
              <p>100 million BeardCoin</p>
            </div>
            <div className='tokenomics-item'>
              <h3>Promotion and Growth (20%):</h3>
              <p>200 million BeardCoin</p>
            </div>
            <div className='tokenomics-item'>
              <h3>TAX:</h3>
              <p>NONE</p>
            </div>
          </div>
        </section>

        <RoadmapPhase />

        {/* Footer */}
        <footer className='footer'>
          <div className='social-media-links'>
            <Link href='https://twitter.com/cory_roberts16'>
              <FaTwitter size={100} />
            </Link>
            <Link href='https://t.co/L5sJTZMXPC'>
              <FaTelegramPlane size={100} />
            </Link>
          </div>
          <p>BeardCoin &copy; 2024</p>
        </footer>
      </main>
    </div>
  )
}
