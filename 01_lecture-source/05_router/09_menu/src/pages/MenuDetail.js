import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { menuDetail } from '../api/MenuAPI';


function MenuDetail() {

    const [menu, setMenu] = useState({
        menuName: '', menuPrice: 0, categoryName: '', detail: {}
    });

    const { menuCode } = useParams();


    useEffect(() => {
        setMenu(menuDetail(menuCode));
    }, []);


    return (
        <div>
            <h1>이름 : {menu.menuName}</h1>
            <h1>가격 : {menu.menuPrice}</h1>
            <h1>종류 : {menu.categoryName}</h1>
            <h1>설명 : {menu.detail.description}</h1>
        </div>
    );
}
export default MenuDetail;