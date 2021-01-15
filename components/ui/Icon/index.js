import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  transition: .3s;
  &:hover {
    transform: scale(1.2)
  }

  & div {
    text-align: center;
    text-transform: capitalize;
    color: #fff;
  }
`



export default function Icon({icon, text }) {
  return (
    <>
      <Container>
          <div>
            <div>
              {icon}
            </div>
            {text}
          </div>
      </Container>
    </>
  )
}