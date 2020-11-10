import { getAllIds, getDataFromId } from '../../lib/markdown';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';


export default function Project({ fileData }) {
    return (
        <>
            <Head>
                <title>{fileData.title}</title>
            </Head>
            <NavBar />
            <h1>Project Page</h1>
            <h1>{fileData.title}</h1>
            <h1>{fileData.tags}</h1>
            <h1>{fileData.date}</h1>
            <h1>Esto es el contenido del markdown</h1>
            <div dangerouslySetInnerHTML={{__html: fileData.contentHtml}}/>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const fileData = await getDataFromId(params.id)
    return {
        props: {
            fileData
        }
    }
}