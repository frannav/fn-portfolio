import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  height: 100px;
  background-color: #000;
  z-index: 1;
  color: #fff;
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
          <Link href='/' passHref>
            <a>
              <Image src='/FN2w.png' width='175px' height='175px'/>
            </a>
          </Link>
        </div>
        <Wrapper>
          <Link href='/#projects' passHref>
            <a>Projects</a>
          </Link>
          <Link href='/#skills' passHref>
            <a>Skills</a>
          </Link>
          <Link href='/#about' passHref>
            <a>About</a>
          </Link>
        </Wrapper>
      </Container>
    </>
  )
}