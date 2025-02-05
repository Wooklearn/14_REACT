import {useSearchParam} from 'react-router-dom';
import {useState, useEffect} from 'react';
import boxStyle from './menu.module.css';

function MenuSearchResult() {

    const [searchParam] = useSearchParams();
    // console.log(searchParam);
    const menuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(getSearchMenu(menuName));
    },[]);


    
    return(
        <>
            <h1>검색 결과!!</h1>
            <div className={boxStyle.MenuBox}>
                
            </div>
        </>
    );

}

export default MenuSearchResult;