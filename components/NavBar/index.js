import Link from 'next/link'
import { Navigation, Logo, MenuLink } from './styles'

export default function NavBar() {
    return (
        <Navigation>
          <Logo src='/FN.png' alt='logo'/>
          {/* <Link href='/projects' passHref>
            <MenuLink>Projects</MenuLink>
          </Link> */}
        </Navigation>
    )
}