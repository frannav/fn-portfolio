import { getSortedData } from '../lib/markdown';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PersonalCard from '../components/PersonalCard';
import TechCard from '../components/TechCard';
import ListOfProjectsCards from '../components/ListOfProjectsCards';


export default function Home({ allInformation }) {

  
  return (
    <>
      <Head>
          <title>Fran Navarro Developer - FranNav Dev</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Here you will find the technology stack and my personal projects."/>
          <meta />
          <meta name="keywords" content="developer, frannav, frannav dev, desarrollador, fullstack, desarrollador web, aplicaciones, app, frontend, backend"/>
          <meta name="robots" content="index"/>
      </Head>
      <NavBar />
      <PersonalCard />
      <TechCard />
      <ListOfProjectsCards {...allInformation} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allInformation = getSortedData()
  return {
    props: {
      allInformation
    }
  }
}
