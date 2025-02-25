export const Article = (props) => {
    const {articlesArray, setArticlesArray} = props;

    const removeArticle = (i) => {
        const updatedArray = articlesArray.filter((element, index) => index !== i);
        setArticlesArray(updatedArray);
    };

    const editArticle = (i) => {
        const newTitle = prompt("Modifica il titolo dell'articolo.");
        const updatedArray = [...articlesArray];
        updatedArray[i] = newTitle;
        setArticlesArray(updatedArray)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.article}
            <div>
                <button className="btn btn-outline-secondary me-1" onClick={() => editArticle(props.articleIndex)}><i className="fa-solid fa-pen"></i></button>
                <button className="btn btn-outline-danger" onClick={() => removeArticle(props.articleIndex)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}