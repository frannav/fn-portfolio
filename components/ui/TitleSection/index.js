import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7.5rem;
  margin-bottom: 5.5rem;
  & h4 {
    background: #ccc;
    background: linear-gradient(10deg, #fff, #002);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

  }
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