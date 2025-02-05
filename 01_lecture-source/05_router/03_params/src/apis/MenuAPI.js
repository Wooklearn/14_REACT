import menus from '../data/menu-detail.json';

/* menus 라는 이름으로 json 데이터를 사용하겠다. */

// 메뉴 데이터 통채로 return
export function getMenuList() {
    console.log('menus', menus);

    return menus;
}

// 전달 받은 메뉴 코드를 기반으로 메뉴 상세 조회
export function getMenuByMenuCode({menuCode}) {
    
    //pathVariable 값은 문자열이기 때문에 정수값이 필요하면 변환 필요!
    // console.log('detail 페이지에서 넘어온 코드 : ', menuCode)
    // console.log(typeof menuCode);

    return menus.filter(menu => menu.menuCode === parseInt(manuCode))[0];
}