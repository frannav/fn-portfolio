import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(7deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  transition: .3s;
`

const Wrapper = styled.div`
  width: 270px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background: black;
  transition: .3s;
`

export default function Avatar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Image src='/animoji2.png' height='220px' width='220px'/>
        </Wrapper>
      </Container>
    </>
  )
}