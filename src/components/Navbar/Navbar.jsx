import Search from '../Search/Search'
import SignInUp from '../SignInUp/SignInUp'

const Navbar = () => {
    return (
        <div className='bg-sky-950 p-8 flex align-center justify-between' >
          <SignInUp />
          <Search />
        </div>
      )
}

export default Navbar
