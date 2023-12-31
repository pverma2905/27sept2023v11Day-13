import Head from 'next/head'
import React from 'react'
import Header from './Header'
import LeftAside from './LeftAside'
import RightAside from './RightAside'
import Footer from './Footer'

export default function CommonLAyout({ children }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div p-0> */}
            <Header />

            <main>
                <div className="row">
                    <LeftAside />
                    {children}

                    <RightAside />
                </div>


            </main>

            <Footer />
            {/* </div> */}

        </div>
    )
}
