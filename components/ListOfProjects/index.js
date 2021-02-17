import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Item = styled.div`
  width: 250px;
  margin-top: 1.75em;
  margin-bottom: 1.75em;
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
  background-clip: text;
  -webkit-background-clip: text;

`
const Tags = styled.p`
  color: #bcb8b1;

`

export default function ListOfProjects({list}) {
  return (
    <>
      <Container>
        {list.map((item) =>
          <Item key={item}>
            <Link href={`/projects/${item.id}`} passHref>
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