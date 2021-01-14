import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 3.5rem;
  justify-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`


export default function Grid({ children }) {
  return (
    <>
      <Container>
          {children}
      </Container>
    </>
  )
}