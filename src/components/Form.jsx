export const Form = (props) => {
    const {newArticle, setNewArticle, articlesArray, setArticlesArray} = props;
    
    const handleSubmit = () => {
        event.preventDefault();
        setArticlesArray([...articlesArray, newArticle]);
        setNewArticle("")
    }

    return (
        <div>
            <h4>Aggiungi un articolo</h4>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control w-50 me-2" type="text" placeholder="Srivi qui il titolo dell'articolo" value={newArticle} onChange={(e) => setNewArticle(e.target.value)}/>
                <button className="btn btn-primary">Invio</button>
            </form>
        </div>
    )
}