import { Img, Article, Column, Section, LinkWrapper, CardLink, Text, Name, ImgCircle } from './styles';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function PersonalCard() {
    return (
        <Section>
            <Article>
                <Column>
                    <ImgCircle>
                        <Img src='./animoji2.png' alt='' />
                    </ImgCircle>
                </Column>
                <Column>
                    <Name>
                        Fran Nav
                    </Name>
                    <Text>
                        Hello there! I´m a Fullstack junior developer and passionate about technology. I enjoy learning new things to improve day by day.
                    </Text>
                    <LinkWrapper>
                        <Link 
                            href='https://github.com/frannav' 
                            passHref
                        >
                            <CardLink
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub size='27px' />
                                Github
                            </CardLink>
                        </Link>
                        <Link 
                            href='https://www.linkedin.com/in/fran-navarro-martinez/' 
                            passHref
                        >
                            <CardLink
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size='27px'/>
                                Linkedin
                            </CardLink>
                        </Link>
                    </LinkWrapper>
                </Column>
            </Article>
        </Section>
    )
}