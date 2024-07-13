
import logo from '../stackline_logo.svg'
import './Header.css'

const Header: React.FC = () => {
    return (
        <div id='header' className='p-4'>
            <img src={logo} alt='stackline logo'/>
        </div>
    )
}

export default Header;
