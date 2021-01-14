import styled from 'styled-components'
import LinkIcon from '../ui/LinkIcon'
import { 
  AiFillGithub, AiFillLinkedin
} from 'react-icons/ai'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 6.5rem;
  margin-bottom: 6.5rem;
`

const Content = styled.div`
  width: 400px;
  padding-left: 4rem;

  & h2,h4,p {
    padding-top: .8rem;
  }
  & div {
    display: flex;
    flex-direction: row;
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
          <p>Puedes encontrarme en:</p>
          <div>
            <LinkIcon icon={< AiFillGithub size='35px' color='black'/>} href='#' text='Github'/>
            <LinkIcon icon={< AiFillLinkedin size='35px' color='black'/>} href='#' text='Linkedin'/>
          </div>
        </Content>
      </Container>
    </>
  )
}