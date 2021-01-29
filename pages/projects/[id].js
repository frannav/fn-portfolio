// import Head from 'next/head';
// import Link from 'next/link';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { getAllIds, getDataFromId } from '../../lib/markdown'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  & h1 {
    padding-top: 3rem;
    padding-bottom: .5rem;
  }

  & p {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5rem;
  * {
    padding: 10px 20px;
  }
`

const Content = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #fff;
`



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


export default function Project({ fileData }) {
  let demoLink
  if(fileData.demo) {
    demoLink = <Link href='#' passHref>
                <a>Demo</a>
              </Link>
  } else {
    demoLink = <span></span>
  }

  return (
    <>
      <Nav />
      <Container>
        <h1>{fileData.title}</h1>
        <p>{fileData.tags}</p>
        <LinkWrapper>
          <div>
            <Link href='#' passHref>
              <a>Github repo</a>
            </Link>
          </div>
          <div>
            {demoLink}
          </div>
        </LinkWrapper>
        <Content dangerouslySetInnerHTML={{ __html: fileData.contentHtml }}>
          
        </Content>
        <div>
          <Image src={fileData.photo} width={300} height={300}/>
        </div>
      </Container>
      <Footer />
    </>
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

