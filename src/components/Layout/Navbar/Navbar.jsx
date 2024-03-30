import Search from '../../Search/Search'
import RegistrationPage from './RegistrationPage/RegistrationPage'

const Navbar = () => {
    return (
        <div className='bg-primary p-8 flex align-center justify-between' >
          <RegistrationPage />
          <Search />
        </div>
      )
}

export default Navbar
