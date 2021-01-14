import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 3rem;
  justify-items: center; 
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