import menu from '../data/menu-detail.json'

export function menuData() {
    return menu;
}

export function menuDetail(menuCode) {
    return menu.filter(menus => menus.menuCode === parseInt(menuCode))[0];

}