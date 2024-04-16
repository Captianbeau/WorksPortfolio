// nav and title with developers name add h2 for different pages
import {useLocation} from 'react-router-dom';
import Navigation from "./Navigation";
function Header() {
    const currentPage = useLocation().pathname;
    let title = '';
switch (currentPage){
case '/Works':
    title = 'My Work';
    break;
case '/Resume':
    title = 'My Resume';
    break;
case '/Contact':
    title = 'Contact Me';
    break;
default:
    title = 'About Me';
}
    return <div>
        <header>
            <h1>Darbie Rousseau</h1>
            <h2>{title}</h2>
            <Navigation />
        </header>
    </div>
};

export default Header;