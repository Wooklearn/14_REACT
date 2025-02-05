/* /menu 요청이 들어오면 보여 줄 페이지 */
import boxStyle from './Menu.module.css';
import {useEffect, useState} from 'react';
import { getMenuList } from '../apis/MenuAPI';
import MenuItem from '../components/MenuItem';  // 경로를 수정
import {useNavigate} from 'react-router-dom';

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const changeHandler = e => setSearchValue(e.target.value);
    // 검색하기 버튼을 누르면 다른 페이지로 검색 결과가 보여줄 것이다.
    const ClickHandler = () => {
        navigate(`/menu/search/?menuName=${searchValue}`)
    }

    // 마운트 시점에 동작 (메뉴 전체 조회)
    useEffect(() => {
        /*
        Menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와
        state 에 담아 줄 것이다.
        */
        setMenuList(getMenuList());
    },[])

    return(
        <>
            <h1>하이미디어 레스토랑 메뉴!!</h1>

            <div>
                <input type='search' name='nameName' onChange={changeHandler}/>
                <button onClick={ClickHandler}>매뉴 이름 검색</button>
            </div>

            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default Menu;