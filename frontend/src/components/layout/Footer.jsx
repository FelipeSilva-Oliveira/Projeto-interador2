import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapPin} from "react-icons/fa"
import styles from "./Footer.module.css"
import logo from "../../assets/img/logoCeuRosadaChina.jpg"
import { NavLink } from "react-router-dom"
import {LuMapPin} from "react-icons/lu"

function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <div className={styles.container}>
          <div className={styles.leftsection}>
            <NavLink to="/">
              <img
                src={logo}
                alt="logo do CEU Rosa da China"
                className={styles.logo}
              />
            </NavLink>
            <ul className={styles.contact}>
              <li><FaPhone className={styles.contact_icons}/>Telefone: (11) 2701-2358</li>
              <li><LuMapPin size={22} className={styles.contact_icons}/> Endereço:{" "}
                <a href="https://maps.app.goo.gl/Rp8foy6VvnwMxZxr5" target="_blank" rel="noreferrer">
                  Rua Clara Petrela, 113, São Paulo, SP, Brazil, 03978-500
                </a>
              </li>
              <li><FaEnvelope className={styles.contact_icons}/> E-mail:{" "} 
                <a href="mailto:atendimentoceurosadachina@gmail.com" className={styles.email}>
                  atendimentoceurosadachina@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <p>Siga-nos:</p>
            <div className={styles.social_icons}>
              <a href="https://www.facebook.com/ceurosachina" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/ceu.rosadachina" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </address>
      <p className={styles.copyright}>
          &copy; 2025 Todos os direitos reservados Projeto Integrador 2
        </p>
    </footer>
  )
}

export default Footer
