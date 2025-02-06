import {NavLink} from 'react-router-dom';


function Navbar() {
    return(
        <div>
            <NavLink to='/'>메인</NavLink><br/>
            <NavLink to='menu'>메뉴</NavLink>
        </div>
    );
}

export default Navbar;