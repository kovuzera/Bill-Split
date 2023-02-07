import './Header.css'
import { BiUser } from 'react-icons/bi'

function Header() {
    return (
        <header>
            <h1>bill<span>$</span>plit</h1>
            <button>
                <BiUser />
                login
            </button>
        </header>
    )
}

export default Header;