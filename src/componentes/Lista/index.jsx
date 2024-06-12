import "./style.css"

function Lista({ item }) {

    return (
        <ul>
            {item.map((items, index) => {
                return <li key={items.id}>
                    <span className="numeroDaLista">{index + 1}</span> {items.text}
                </li>
            })}
        </ul>
    )
}

export default Lista;