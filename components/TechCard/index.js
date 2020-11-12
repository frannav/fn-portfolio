import { Section, Card, Category, Techs, TextCategory, TextTechs, Content, SecondCategory, ThirdCategory, FourthCategory } from './styles';

import { 
    FaReact,
    FaMobileAlt,
    FaDocker
 } from 'react-icons/fa';

import { 
    BsServer
 } from 'react-icons/bs';


let frontTechs = [
    'HTML',
    'CSS',
    'React', 
    'Styled-Components'
]

let backTechs = [
    'Node JS',
    'Express JS',
    'MongoDB',
    'Mongoose'
]

let mobileTechs = [
    'React-Native'
]

let toolsTechs = [
    'Docker', 
    'Testing'
]

export default function TechCard() {
    return (
        <Content>
            <Section>
                <Card>
                    <Category>
                        <TextCategory>Frontend</TextCategory>
                        <FaReact size='52px'/>
                    </Category>
                    <Techs>
                        {
                            frontTechs.map((item) => {
                            return <TextTechs key={item}>{item}</TextTechs>
                            })
                        }
                    </Techs>
                </Card>
            </Section>
            <Section>
                <Card>
                    <SecondCategory>
                        <TextCategory>Backend</TextCategory>
                        <BsServer size='52px'/>
                    </SecondCategory>
                    <Techs>
                        {
                            backTechs.map((item) => {
                            return <TextTechs key={item}>{item}</TextTechs>
                            })
                        }
                    </Techs>
                </Card>
            </Section>
            <Section>
                <Card>
                    <ThirdCategory>
                        <TextCategory>Mobile</TextCategory>
                        <FaMobileAlt size='52px'/>
                    </ThirdCategory>
                    <Techs>
                        {
                            mobileTechs.map((item) => {
                            return <TextTechs key={item}>{item}</TextTechs>
                            })
                        }
                    </Techs>
                </Card>
            </Section>
            <Section>
                <Card>
                    <FourthCategory>
                        <TextCategory>Tools</TextCategory>
                        <FaDocker size='52px'/>
                    </FourthCategory>
                    <Techs>
                        {
                            toolsTechs.map((item) => {
                            return <TextTechs key={item}>{item}</TextTechs>
                            })
                        }
                    </Techs>
                </Card>
            </Section>
        </Content>
    )
}