import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`


const Icon = styled.div`
`

export default function LinkIcon({icon, href }) {
  return (
    <>
      <Container>
          <Link href={href} passHref>
            <a>
              <Icon>
                {icon}
              </Icon>
            </a>
          </Link>
      </Container>
    </>
  )
}