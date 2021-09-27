
// ROUTER-DOM
import {Link} from 'react-router-dom';

// ESTILOS DEL PROPIO COMPONENTE MENU
import '../styles/Menu.css'

const Menu = () => {

    return (
        <div className='menu'>
            <nav className='nav-menu'>
                <ul className='list-menu'>
                    <li className='item-menu tw-bg-white'><Link to='/'>Todo App</Link></li>
                    <li className='item-menu tw-bg-white'><Link to='/Papelera'>Papelera</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;