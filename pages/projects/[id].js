// import Head from 'next/head';
// import Link from 'next/link';
// import { getAllIds, getDataFromId } from '../../lib/markdown';
// import NavBar from '../../components/NavBar';
// import Footer from '../../components/Footer';
// import {
//     Container,
//     Title,
//     TagsWrapper,
//     Tag,
//     Body,
//     MarkdownContent,
//     MarkdownImage,
//     Content,
//     CardLink,
//     DemoLink
// } from './styles';
// import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'

export default function Project() {
  return (
    <h1>🏗Section under construction</h1>
  )
}

// export default function Project({ fileData }) {
//     let demoLink
//     if (fileData.demo) {
//         demoLink =
//         <Link href={fileData.demo}
//         passHref>
//             <DemoLink target="_blank" rel="noopener noreferrer">
//                 <FaRegWindowMaximize size='27px' />
//                 Demo
//             </DemoLink> 
//         </Link>
//     } else {
//         demoLink = <h3>Demo not available</h3>
//     }

//     return (
//         <>
//             <Head>
//                 <title>{fileData.title}</title>
//             </Head>
//             <NavBar />
//             <Container>
//                 <Title>{fileData.title}</Title>
//                 <TagsWrapper>
//                     {fileData.tags.map(tag => { return <Tag>{tag}</Tag> })}
//                     <Link
//                         href={fileData.github}
//                         passHref
//                     >
//                         <CardLink
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaGithub size='27px' />
//                             View code on GitHub
//                         </CardLink>
//                     </Link>
//                     {demoLink}
//                 </TagsWrapper>
//                 <Body>
//                     <MarkdownContent>
//                         <Content dangerouslySetInnerHTML={{ __html: fileData.contentHtml }} />
//                     </MarkdownContent>
//                     <MarkdownImage
//                         src={`/${fileData.photo}`}
//                         alt={`Image from project ${fileData.title}`}
//                     />
//                 </Body>
//             </Container>
//             <Footer />
//         </>
//     )
// }

// export async function getStaticPaths() {
//     const paths = getAllIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const fileData = await getDataFromId(params.id)
//     return {
//         props: {
//             fileData
//         }
//     }
// }