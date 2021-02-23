import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { getAllIds, getDataFromId } from '../../lib/markdown'
import styled from 'styled-components'
import SvgWebsite from '../../components/ui/Svg/SvgWebsite';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  & h1 {
    color: #6c757d;
    padding-top: 3rem;
    padding-bottom: .5rem;
  }

  & p {
    font-size: 1rem;
    color: #ced4da;
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
  padding-bottom: .5rem;
  * {
    padding: 10px 20px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: .2s;

  a {
    color: #023e8a;
  }

  p {
    color: #353535;
  }

  & :hover {
    transform: scale(1.02);
  }
`

const SvgComponentContainer = styled.div`
  width: 30px;
`

const Content = styled.div`
  padding-top: .3rem;
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
              <LinkContainer>
                <p>Link:</p>
                <Link href={`${fileData.url}`} passHref>
                  <a target="_blank" rel="noreferrer">{fileData.url}</a>
                </Link>
                <SvgComponentContainer>
                  <SvgWebsite />
                </SvgComponentContainer>
              </LinkContainer>
          }
          <div>
            {demoLink}
          </div>
        </LinkWrapper>
        
        {
          fileData.contentHtml == '' &&
            <span></span>
        }
        {
          fileData.contentHtml != '' &&
          <Content dangerouslySetInnerHTML={{ __html: fileData.contentHtml }}>
          </Content>
        }
        
        {
          fileData.img != '' &&
            <div>
              {
                fileData.url == '' && 
                  <div>
                    <Image src={fileData.img} width='600' height='700' alt={`Image from project ${fileData.title}`}/>
                  </div>
              }
              {
                fileData.url != '' &&
                  <Link href={`${fileData.url}`} passHref>
                    <a target="_blank" rel="noreferrer">
                      <Image src={fileData.img} width='600' height='700' alt={`Image from project ${fileData.title}`}/>
                    </a>
                  </Link>
              }

            </div>
        }
        {
          fileData.img == '' &&
            <div>

            </div>
        }
      </Container>
      <Footer />
    </>
  )
}

