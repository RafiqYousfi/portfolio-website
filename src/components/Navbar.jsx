import {Link, Outlet} from 'react-router-dom'
const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li> <Link to='/home'>Home</Link></li>
                <li> <Link to='/about me'>About Me</Link></li>               
                <li> <Link to='/projects'>Projects</Link></li>               
                <li> <Link to='/contact'>Contact</Link></li>  
            </ul>
        </nav>
        <Outlet/>
        </>
     );
}

export default Navigation;