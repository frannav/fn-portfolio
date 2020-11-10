import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllIds, getDataFromId } from '../../lib/markdown';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {
    Container,
    Title,
    TagsWrapper,
    Tag,
    Body,
    MarkdownContent,
    Content,
    CardLink
} from './styles';
import { FaGithub } from 'react-icons/fa'

export default function Project({ fileData }) {
    return (
        <>
            <Head>
                <title>{fileData.title}</title>
            </Head>
            <NavBar />
            <Container>
                <Title>{fileData.title}</Title>
                <TagsWrapper>
                    { fileData.tags.map(tag => { return <Tag>{tag}</Tag> }) }
                </TagsWrapper>
                <Body>
                    <MarkdownContent>
                        <Content dangerouslySetInnerHTML={{__html: fileData.contentHtml}}/>
                        <Link 
                            href={fileData.github} 
                            passHref
                        >
                            <CardLink
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub size='27px' />
                                View code on GitHub
                            </CardLink>
                        </Link>
                    </MarkdownContent>
                    <Image
                        src={`/${fileData.photo}`}
                        alt={`Image from project ${fileData.title}`}
                        width={fileData.photow}
                        height={fileData.photoh}
                    />
                </Body>
            </Container>
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