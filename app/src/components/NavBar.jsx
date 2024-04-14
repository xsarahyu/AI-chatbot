import { Link } from 'react-router-dom'
import Skull from '../assets/skull.png'

const NavBar = () => {
  return (
    <nav className="bg-rc-red py-2 flex items-center px-44">
      <div>
        <img src={Skull} alt="skullImage" className="w-14"/>
      </div>
      <ul className="flex justify-center flex-1">
        <li className="mx-6">
          <Link
            data-testid='homeNavBarButton'
            to="/"
            className="text-white uppercase hover:underline"
            style={{ fontSize: '26px' }}
            data-testid='homeLink'
          >
            Home
          </Link>
        </li>
        <li className="mx-6">
          <Link
            data-testid='loginNavBarButton'
            to="/login"
            className="text-white uppercase hover:underline"
            style={{ fontSize: '26px' }}
            data-testid='loginLink'
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar