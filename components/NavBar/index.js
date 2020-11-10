import Link from 'next/link'
import { Navigation, Logo } from './styles'

export default function NavBar() {
    return (
        <Navigation>
          <Link
            href='/'
          >
            <a>
              <Logo src='/FN.png' alt='logo'/>
            </a>
          </Link>
        </Navigation>
    )
}