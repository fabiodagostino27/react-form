export const Article = (props) => {
    const {articlesArray, setArticlesArray} = props;

    const removeArticle = (i) => {
        const updatedArray = articlesArray.filter((element, index) => index !== i);
        setArticlesArray(updatedArray);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.article}
            <div>
                <button className="btn btn-outline-secondary me-1"><i className="fa-solid fa-pen"></i></button>
                <button className="btn btn-outline-danger" onClick={() => removeArticle(props.articleIndex)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}