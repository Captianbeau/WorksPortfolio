//links to aboutme page, portfolio, contact, resume page
import {Link, useLocation} from 'react-router-dom'; 
function Navigation (){
    const currentPage = useLocation().pathname;
return <div>
    <nav>
        <Link
        to= "/"
        className={currentPage === '/' ? 'nav active': 'navLink'}
        >
            About Me
        </Link>
        <Link
        to= "/Works"
        className={currentPage === '/Works' ? 'nav active': 'navLink'}
        >
            My Work
        </Link>
        <Link
        to= "/Resume"
        className={currentPage === '/Resume' ? 'nav active': 'navLink'}
        >
            My Resume
        </Link>
    </nav>
</div>
};

export default Navigation;