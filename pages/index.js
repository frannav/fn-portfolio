import Link from 'next/link'
import LinkIcon from '../components/ui/LinkIcon'
import { 
  AiFillGithub,
  AiFillHtml5
} from 'react-icons/ai'
import {
  DiCss3
} from 'react-icons/di'
import { SiStyledComponents, SiJavascript } from 'react-icons/si'

import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiNextDotJs } from 'react-icons/si'
import Avatar from '../components/ui/Avatar'
import Grid from '../components/ui/Grid'
import Icon from '../components/ui/Icon'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

export default function Home() {

  return (
    <>
      <Nav />
      <br></br>
      <br></br>
      <Hero myAvatar={<Avatar />} title='Fran Navarro' subtitle='Developer' paragraph='Soy un apasionado de la tecnología y me encanta aprender cosas nuevas para mejorar día a día.' />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Icon icon={< SiJavascript size='60px' color='#5B6271'/>} text='Javascript'/>
        <Icon icon={< AiFillHtml5 size='60px' color='#5B6271'/>} text='Html'/>
        <Icon icon={< DiCss3 size='60px' color='#5B6271'/>} text='CSS'/>
        <Icon icon={< FaReact size='60px' color='#5B6271'/>} text='React'/>
        <Icon icon={< SiNextDotJs size='60px' color='#5B6271'/>} text='Next'/>
        <Icon icon={< SiStyledComponents size='60px' color='#5B6271'/>} text='Styled-Components'/>
        <Icon icon={< FaNodeJs size='60px' color='#5B6271'/>} text='Nodejs'/>
        <Icon icon={< FaDocker size='60px' color='#5B6271'/>} text='Docker'/>
      </Grid>
      {/* <h1>Soy un H1</h1>
      <h2>Soy un H2</h2>
      <h3>Soy un H3</h3>
      <h4>Soy un H4</h4>
      <h5>Soy un H5</h5>
      <h6>Soy un H6</h6>
      <br></br>
      <p>Soy un párrafo Soy un párrafo Soy un párrafo Soy un párrafo Soy un párrafo Soy un párrafo Soy un párrafo</p>
      <Link href='http://www.google.es' passHref>
        <a href='https://www.google.es'>Soy un link</a>
      </Link>
      <br></br>
      <LinkIcon icon={< AiFillGithub size='40px' color='black'/>} href='test'/>
      <br></br>
      <Avatar />
      <br></br>
       */}
    </>
  )
}