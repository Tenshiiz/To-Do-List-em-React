import BotaoDeletar from "../BotaoDeletar";
import "./style.css"

function Lista({ item, onDelete, value }) {
    return (
        <ul>
            {item.map((items, index) => {
                return <div className="div1" key={items.id}>
                    <li>
                        <span className="numeroDaLista">
                            {index + 1}
                        </span>
                        {items.text}
                    </li>
                    <BotaoDeletar id={items.id} onDelete={onDelete}/>
                </div>
            })}
        </ul>
    )
}

export default Lista;