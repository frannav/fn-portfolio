import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Content = styled.div`
  width: 400px;
  padding-left: 4rem;

  & h2,h4,p {
    padding-top: .8rem;
  }
`

export default function Hero({myAvatar, title, subtitle, paragraph}) {
  return (
    <>
      <Container>
        {myAvatar}
        <Content>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{paragraph}</p>
        </Content>
      </Container>
    </>
  )
}