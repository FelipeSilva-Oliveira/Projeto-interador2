import styles from "./About.module.css"

function About(){
    
    return (
        <main>
            <div className={styles.container}>
                <section className={styles.content_about}>
                    <h1>Sobre Nós</h1>
                    <p>
                        Somos um grupo de estudantes do eixo de Computação da UNIVESP e, como proposta para o Projeto Integrador,
                        identificamos que o CEU Rosa da China oferece diversas atividades gratuitas para a comunidade local.
                        No entanto, percebemos que a divulgação dessas oportunidades ainda é limitada e não alcança todo o público
                        que poderia se beneficiar delas.<br/>
                        Com isso em mente, desenvolvemos este site como mais um canal de divulgação, para levar a um número maior 
                        de pessoas da região as atividades oferecidas pelo CEU Rosa da China, abrangendo áreas como esporte, lazer 
                        e educação. Além disso, buscamos garantir que a plataforma seja acessível, permitindo que qualquer pessoa 
                        possa utilizá-la de forma simples e inclusiva.
                    </p>
                </section>

                <section className={styles.content_team}>
                    <h2>Nossa Equipe:</h2>
                    <ul>
                        <li>Felipe da Silva Faria de Oliveira</li>
                        <li>Rafael Dias de Santi</li>
                        <li>Rodrigo Souza Machado Bitener</li>
                        <li>Ronald Odair Oliveira Juliao</li>
                        <li>Wilson Ademar de Arruda</li>
                        <li>Lohan Ribeiro Cerqueira</li>
                        <li>Lucas Souza Fraga</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default About