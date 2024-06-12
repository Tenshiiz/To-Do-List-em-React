import "./style.css"

function BotaoAddItem({onClique}) {
    return (
        <button onClick={onClique} className="buttonAdd">Adicionar</button>
    )
}

export default BotaoAddItem;