import PropTypes from "prop-types"
import styles from "./CardsModalities.module.css"

//cards com as atividades do CEU rosa da china
function CardsModalities ({atividade, turno, nivel, horario, dia, professor, lugar, disponivel_em,}){

    return(
        <div className={styles.container}>
            
        </div>
    )
}

//o proptypes garante que qualquer manipulaçao feita por outro programador, garanta que o tipo de dado passado seja o correto.
//no caso do proptype ele gera erro a nivel aplicação, ou seja, somente o programador ira ver esse erro.
CardsModalities.PropTypes = {
    atividade:PropTypes.string.isRequired,
    professor:PropTypes.string,
    local:PropTypes.string.isRequired
//adicionar o outro itens que irao no card
}

CardsModalities.defaultProps = {
    professor:"Não especificado"
//adicionar valores padroes para os campos nao obrigatorios
}

export default CardsModalities