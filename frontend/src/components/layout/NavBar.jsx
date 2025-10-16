import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import logo from "../../assets/img/logoCeuRosadaChina.jpg"

function NavBar(){

    return(
        <nav aria-label="Navegação principal" className= {styles.navbar}>
            <NavLink to="/">
                <img src={logo} alt="logo do CEU Rosa da China" className={styles.logo} />
            </NavLink>
            
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/">INÍCIO</NavLink>
                    </li>
                <li className={styles.item}>
                    <NavLink to="/Contact">CONTATO</NavLink>
                    </li>
                <li className={styles.item}>
                    <NavLink to="/About">SOBRE</NavLink>
                    </li> 
            </ul>
        </nav>
    )
}

export default NavBar