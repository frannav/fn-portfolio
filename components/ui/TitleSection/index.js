import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7.5rem;
  margin-bottom: 5.5rem;
`

export default function TitleSection({ title}) {
  return (
    <>
      <Container>
        {title}
      </Container>
    </>
  )
}