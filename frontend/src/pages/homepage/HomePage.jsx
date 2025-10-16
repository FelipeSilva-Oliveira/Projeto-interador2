import styles from "./HomePage.module.css"
import { useState, useEffect, useRef } from "react"
import Card from "../../components/componentsHome/CardsModalities"
import Select from "../../components/Select"

function HomePage(){
    const [modalities, setModalies] = useState([])

    /*metodo para se conecta com o BD e fazer GET de modalidades */
    /*o "useEffect é para nao fica carregando infinitamente minhas opações no select " */
    useEffect(() => {
        fetch("http://localhost:5000/modalidades",{ /*depois passar o link do BD da nuvem */
            method: "GET",
            headers: {
                'content-type': 'application/json',
            },
        })
            /*transformar meu json em dados */
            .then((resp) => resp.json())
            .then((data) =>{
                setModalies(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <main>
            <div className={styles.home_container}>
                <section className={styles.introduction_container}>
                    <h1>CEU Rosa da China — um espaço para todos!</h1>
                    <p>
                        Este é o nosso espaço para você ficar por dentro das atividades gratuitas do CEU.
                        Aqui você encontra todas as atividades gratuitas que o CEU oferece.
                        Confira o que está disponível e descubra maneiras de se divertir e aprender com a sua comunidade!
                    </p>
                </section>

                <section className={styles.activies_container}>
                    <h1>Confira nossas atividades disponíveis!</h1>
                    <Select
                        name="modalities_id"
                        text="selecione uma atividade"
                        options={modalities}
                        labelField="nome"
                    />
                    <h2>local onde mostrara a atividade selecionada</h2>
                </section>
            </div>
        </main>
    )
}

export default HomePage