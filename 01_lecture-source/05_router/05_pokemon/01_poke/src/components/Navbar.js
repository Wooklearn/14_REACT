import ItemStyle from './Navbar.module.css';

function Navbar() {

    return (
        <div className={ItemStyle.Poke}>
            <h4>포켓몬 검색</h4>
            <input type="text" />
            <button>검색</button>

            <h4>목록</h4>

        </div>
    );
}

export default Navbar;