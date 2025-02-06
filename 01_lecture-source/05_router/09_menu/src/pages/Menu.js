import { useState, useEffect } from 'react';
import MenuItem from '../items/MenuItem';
import { menuData } from '../api/MenuAPI';

function Menu() {

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(menuData());
    }, []);


    return (
        <div>
            <h1>메뉴 리스트</h1>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
        </div>
    );
}

export default Menu;