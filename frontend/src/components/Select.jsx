import styles from "./Select.module.css"

function SelectAtivies({name, options, labelField}){
    return(
        <div className={styles.container}>
            <select name={name} id={name}>
                <option>Selecione uma atividade</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option[labelField]}
                    </option>
                ))}
                
            </select>
        </div>
    )
}

export default SelectAtivies