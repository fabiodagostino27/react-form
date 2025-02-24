export const Form = () => {
    return (
        <div>
            <h4>Aggiungi un articolo</h4>
            <form className="d-flex">
                <input className="form-control w-50 me-2" type="text" placeholder="Srivi qui il titolo dell'articolo"/>
                <button className="btn btn-primary">Invio</button>
            </form>
        </div>
    )
}