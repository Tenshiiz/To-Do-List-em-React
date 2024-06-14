import "./style.css"


function BotaoDeletar( {id, onDelete} ) {
    return(
        <button className="deletar" onClick={(() => onDelete(id))}>Deletar</button>
    )
}

export default BotaoDeletar;