import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  height: 100px;
`

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 15px;
`

export default function Nav() {
  return (
    <>
      <Container>
        <div>
          <Link href='#' passHref>
            <a>
              <Image src='/FN2b.png' width='175px' height='175px'/>
            </a>
          </Link>
        </div>
        <Wrapper>
          <Link href='#' passHref>
            <a>Technologies</a>
          </Link>
          <Link href='#' passHref>
            <a>About</a>
          </Link>
        </Wrapper>
      </Container>
    </>
  )
}