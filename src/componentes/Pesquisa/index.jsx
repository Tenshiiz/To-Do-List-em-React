import "./style.css";

function Pesquisa({ temp, onChange }) {
    return (
        <div className="contentPesquisa">
            <div>
                <label htmlFor="name">Lista</label>
                <input type="text" name="name" id="name" value={temp} onChange={onChange} placeholder="texto" />
            </div>
        </div>
    );
}

export default Pesquisa;