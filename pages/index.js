import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import { useState } from 'react'

export default function Home() {
  const [web3,setWeb3]=useState();
  const [address,setAddress]=useState();

  const connectWalletHandler = async () => {
    // Check if Metamask is installed
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
      try {
        await window.ethereum.request({method: 'eth_requestAccounts'})
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])
      } catch (error) {
        console.log(error.message)
      }
    }else {
      alert('Please Install Metamask')
    }
  }

  return (
    <div >
      <Head>
        <title>Lottery App</title>
        <meta name="description" content="An Ethereum Lottery Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className='navbar mt-4 mb-4'>
          <div className="container">
            <div className="navbar-brand">
              <h1>Lottery App</h1>
            </div>
            <div className="navbar-end">
              <button onClick={connectWalletHandler} className='button is-link'>Connect Wallet</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className='mt-5'>
            <div className="columns">
              <div className="column is-two-third">
                <section className="mt-5">
                  <p>Enter Lottery by Sending 0.01 Ether</p>
                  <button className='button is-link is-large is-light mt-3'>Play Now</button>
                </section>
                <section className="mt-6">
                  <p><b>Admin Only:</b>Pick Winner</p>
                  <button className='button is-primary is-large is-light mt-3'>Play Now</button>
                </section>
              </div>
              <div  className={`${styles.lotteryInfo}column is-one-third`}>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Lottery History</h2>
                        <div className="history-entry">
                          <div className="">Lottery #1 Winner:</div>
                          <div className=""><a href='https://etherscan.io/address/0xE3f20f8383D471772A4fF4dc9503286C55fb9f1F' target='_blank'>0xE3f20f8383D471772A4fF4dc9503286C55fb9f1F</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Players (1)</h2>
                          <div className="">
                            <a href='https://etherscan.io/address/0xE3f20f8383D471772A4fF4dc9503286C55fb9f1F' target='_blank'>0xE3f20f8383D471772A4fF4dc9503286C55fb9f1F</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2>Pot</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy;2022 Smiling Shuks</p>
      </footer>
    </div>
  )
}
