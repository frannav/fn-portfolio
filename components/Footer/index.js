import styled from 'styled-components'
import LinkIcon from '../ui/LinkIcon'
import { 
  AiFillGithub, AiFillLinkedin
} from 'react-icons/ai'

const Container = styled.footer`
  margin-top: 9rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  height: 100px;
`

export default function Footer() {
  return (
    <>
      <Container>
        <LinkIcon icon={< AiFillGithub size='35px' color='black'/>} href='#' text='Github'/>
        <LinkIcon icon={< AiFillLinkedin size='35px' color='black'/>} href='#' text='Linkedin'/>
      </Container>
    </>
  )
}