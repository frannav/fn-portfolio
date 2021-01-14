import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit, DiVisualstudio } from 'react-icons/di'
import { SiStyledComponents, SiJavascript } from 'react-icons/si'
import { FaReact, FaNode, FaDocker, FaPython, FaJava, FaPhp } from 'react-icons/fa'
import { SiNextDotJs } from 'react-icons/si'
import Avatar from '../components/ui/Avatar'
import Grid from '../components/ui/Grid'
import Icon from '../components/ui/Icon'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TitleSection from '../components/ui/TitleSection'

export default function Home() {

  return (
    <>
      <Nav />
      <span id='about'></span>
      <Hero
        myAvatar={<Avatar />} 
        title='Fran Navarro'
        subtitle='Developer' 
        paragraph='Soy un apasionado de la tecnología y me encanta aprender cosas nuevas para mejorar día a día.'
      />
      <span id='skills'></span>
      <TitleSection title={<h2>Tecnologías y herramientas  ⚙️</h2>} />
      <Grid>
        <Icon icon={< SiJavascript size='60px' color='#ffd100' style={{'backgroundColor': '#000'}}/>} text='Javascript'/>
        <Icon icon={< AiFillHtml5 size='60px' color='#e34f26'/>} text='Html'/>
        <Icon icon={< DiCss3 size='60px' color='#2196F3'/>} text='CSS'/>
        <Icon icon={< FaReact size='60px' color='#53C1DE'/>} text='React'/>
        <Icon icon={< SiNextDotJs size='60px' color='#000'/>} text='Next'/>
        <Icon icon={< SiStyledComponents size='60px' color='#D6B199'/>} text='Styled-Components'/>
        <Icon icon={< FaNode size='60px' color='#000'/>} text='Nodejs'/>
        <Icon icon={< FaDocker size='60px' color='#0466c8'/>} text='Docker'/>
        <Icon icon={< DiGit size='60px' color='#DE4C36'/>} text='Git & Github'/>
        <Icon icon={< DiVisualstudio size='60px' color='#0179cb'/>} text='Git & Github'/>
      </Grid>
      <TitleSection title={<h4>Conocimientos 📚</h4>} />
      <Grid>
        <Icon icon={< FaPython size='60px' color='#000'/>} text='Python'/>
        <Icon icon={< FaJava size='60px' color='#e34f26'/>} text='Java'/>
        <Icon icon={< FaPhp size='60px' color='#fff' style={{ backgroundColor: '#657CCF', borderRadius: '25%'}}/>} text='PHP'/>
      </Grid>
      <Footer />
    </>
  )
}