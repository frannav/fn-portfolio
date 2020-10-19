import Link from 'next/link'
import { FooterStyled, FooterLink, CardLink } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <FooterStyled>
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
                    <FaLinkedin size='27px' />
                    Linkedin
                </CardLink>
            </Link>
        </FooterStyled>
    )
}