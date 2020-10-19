import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BodyComponent from '../components/BodyComponent';
import PersonalCard from '../components/PersonalCard';
import TechCard from '../components/TechCard';


export default function Home() {
  return (
    <>
      <Head>
          <title>Fran Navarro Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="This is the home page of frannav portfolio"/>
          <meta />
          <meta name="keywords" content="developer, frannav, frannav dev, desarrollador, fullstack, desarrollador web, aplicaciones, app, frontend, backend"/>
          <meta name="robots" content="index"/>
      </Head>
      <NavBar />
      <BodyComponent>
        <PersonalCard />
        <TechCard />
      </BodyComponent>
      <Footer />
    </>
  )
}
