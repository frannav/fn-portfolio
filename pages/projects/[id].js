import Head from 'next/head';
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  * {
    padding: 10px 20px;
  }
`

const Content = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #fff;
  line-height: 1.8rem;
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
      <Head>
        <title>{fileData.title}</title>
      </Head>
      <Nav />
      <Container>
        <h1>{fileData.title}</h1>
        <p>{fileData.tags}</p>
        <LinkWrapper>
          {
            fileData.url == '' && 
            <div>
              
            </div>
          }
          {
            fileData.url != '' &&
              <div>
                <Link href={`https://www.${fileData.url}`} passHref>
                  <a target="_blank" rel="noreferrer">Project URL: {fileData.url}</a>
                </Link>
              </div>
          }
          
          {/* <div>
            <Link href='#' passHref>
              <a>Github repo</a>
            </Link>
          </div> */}
          <div>
            {demoLink}
          </div>
        </LinkWrapper>
        <Content dangerouslySetInnerHTML={{ __html: fileData.contentHtml }}>
          
        </Content>
        {
          fileData.img != '' &&
            <div>
              <Image src={fileData.photo} width={300} height={300} alt={`Image from project ${fileData.title}`}/>
            </div>
        }
        {
          fileData.img == '' &&
            <div>

            </div>
        }
        {/* <div>
          <Image src={fileData.photo} width={300} height={300} alt={`Image from project ${fileData.title}`}/>
        </div> */}
      </Container>
      <Footer />
    </>
  )
}

