import Head from 'next/head'
import Header from '../components/header/Header';

export default function index_content() {
  return (
    <>
      <Head>
        <title>David Solojov</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className='flex items-center justify-center w-[100vw] h-[100vh] absolute top-0 left-0'>          
        <iframe src='/assets/pages/text-animation/index.html' className='w-hull md:w-[60%] h-[40%] md:h-[80%]' />
        {/* <Footer/> */}
      </main>
      <div id='canvas-container' className='absolute w-full h-full top-0 left-0' style={{zIndex:'-100'}}></div>
      
      <Header />
    </>
  )
}