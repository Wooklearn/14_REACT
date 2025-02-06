import itemStyle from './Header.module.css'
function Header() {

    return (
        <div>
            <h1 className={itemStyle.Poke}>
                <img src="pokelogo.png" alt="pokelogo" style={{ width: '150px', height: 'auto', marginLeft: '15px' }} />
                <span className={itemStyle.Title}>포켓몬 도감</span>

            </h1>
        </div>
    );
}

export default Header;