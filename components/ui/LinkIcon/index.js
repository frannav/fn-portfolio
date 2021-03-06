import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 60px;
  & a {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    color: #fff;
  }
`


const Icon = styled.div`
`

export default function LinkIcon({icon, href, text }) {
  return (
    <>
      <Container>
          <Link href={href} passHref>
            <a target="_blank" rel="noreferrer">
              <Icon>
                {icon}
              </Icon>
              {text}
            </a>
          </Link>
      </Container>
    </>
  )
}