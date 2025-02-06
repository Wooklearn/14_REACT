import { NavLink } from 'react-router-dom';

function MenuItem({ menu }) {
    return (
        <div>
            <h1><NavLink to={`/menu/${menu.menuCode}`}>메뉴 이름 : {menu.menuName}</NavLink></h1>
            <h2>메뉴 가격 : {menu.menuPrice}</h2>
            <h2>메뉴 종류 : {menu.categoryName}</h2>
            <h2>메뉴 설명 : {menu.detail.description}</h2>
        </div>
    );
}

export default MenuItem;