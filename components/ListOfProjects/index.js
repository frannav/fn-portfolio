import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Item = styled.div`
  width: 100%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border-radius: 3px;
  padding: 15px 30px;

  & :hover {
    background-color: #495057;
  }
`
const Title = styled.h5`
  background: #ccc;
  background: linear-gradient(20deg, #e63946, #118ab2, #f2cc8f);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

`
const Tags = styled.p`


`

export default function ListOfProjects({list}) {
  return (
    <>
      {/* {console.log(list.map((item) => item.title ))} */}
      <Container>
        {list.map((item) =>
          <Item key={item}>
            <Link href='#' passHref>
              <a>
                <Title>{item.title}</Title>
                <Tags>{item.tags}</Tags>
              </a>
            </Link>
          </Item>
        )}
      </Container>
    </>
  )
}