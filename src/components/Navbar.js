import { NavLink } from 'react-router-dom'

const Navbar =() => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar