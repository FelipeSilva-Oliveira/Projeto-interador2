import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
import {LuMapPin} from "react-icons/lu"
import styles from "./Contact.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [emailError, setEmailErro] = useState("")

  const validarEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  /*Função para enviar um e-mail ao CEU após a validação do endereço de e-mail*/
  const sendEmail = (e) => {
    e.preventDefault();

    if(!validarEmail(email)){
      setEmailErro("Por favor, insira um email válido")
    }else{
      setEmailErro("")
    }
    /*parametros necessario para o envio do email */
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, /*"form.current" e o conteudo do meu formulário(nome,email,mensagem) */
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Enviado com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Erro ao enviar. Tente novamente.");
        }
      );
  };
/*Funçao para limpar os compos do formulário*/
  const limparCampos = () => {
    form.current.reset();
    setStatus("");
    setEmailErro ("")
  };

  return (
      <main className={styles.container}>
        <section className={styles.container_contact}>
            <h1>Contate-Nos</h1>
            <ul className={styles.item}>
              <li><FaPhone aria-label="Telefone"/>{" "}(11) 2701-2358</li>
              <li><FaEnvelope aria-label="Email"/>{" "}
                <a href="mailto:atendimentoceurosadachina@gmail.com" className={styles.email}>
                  atendimentoceurosadachina@gmail.com
                </a>
              </li>
              <li><LuMapPin aria-label="Localização"/>{" "}
                <a href="https://maps.app.goo.gl/Rp8foy6VvnwMxZxr5" target="_blank" rel="noreferrer" className={styles.location}>
                    Rua Clara Petrela, 113, São Paulo, SP, Brazil, 03978-500
                </a>
              </li>
            </ul>
            <h2>Siga-nos:</h2>
            <div className={styles.social}>
              <a href="https://www.facebook.com/ceurosachina" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/ceu.rosadachina" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
        </section>

        <section className={styles.container_form}>
            <h1>Formulário de Contato</h1>
            <form ref={form} onSubmit={sendEmail} aria-label="formulário de contato">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Digite seu nome"
                required
                autoComplete="off"
              />

              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="exemplo@email.com"
                required
                autoComplete="off"
              />
              {emailError && <p className={styles.email_erro}>{emailError}</p>}

              <label htmlFor="mensage">Mensagem:</label>
              <textarea
                name="message"
                id="mensage"
                placeholder="Digite sua mensagem aqui"
                rows={5}
                maxLength={400}
                required
                autoComplete="off"
              ></textarea>

              <div className={styles.buttons}>
                <button type="button" onClick={limparCampos} aria-label="Limpar formulário">
                  Limpar
                </button>
                <button type="submit" aria-label="Enviar email">
                  Enviar
                </button>
              </div>

              {status && <p>{status}</p>}
            </form>
        </section>
      </main>
  );
}

export default Contact;
