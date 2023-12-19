import styles from "../Card/app.module.css"

export default function App(props){
    return(
        <div className={styles.app}>
            <img src={props.public}/>
            <div className={styles.principal}>
                <br />
                <h2>{props.titulo}</h2>
                <br />
                <p>{props.descricao}</p>
                <br />
                <h3>{props.valor}</h3>
                <h4>{props.parcelamento}</h4>
                &nbsp;<p className={styles.estoque}>Em estoque</p>
                <br />
                <button className={styles.botao1}>{props.botao1}</button>&nbsp;
                <button className={styles.botao2}>{props.botao2}</button>
            </div>
        </div>
        
    )
}