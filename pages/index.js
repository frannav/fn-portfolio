import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiStyledComponents, SiJavascript } from 'react-icons/si'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiNextDotJs } from 'react-icons/si'
import Avatar from '../components/ui/Avatar'
import Grid from '../components/ui/Grid'
import Icon from '../components/ui/Icon'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <Nav />
      <br></br>
      <br></br>
      <Hero 
        myAvatar={<Avatar />} 
        title='Fran Navarro'
        subtitle='Developer' 
        paragraph='Soy un apasionado de la tecnología y me encanta aprender cosas nuevas para mejorar día a día.'
      />
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  )
}