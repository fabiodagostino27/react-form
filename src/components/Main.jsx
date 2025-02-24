import { useState } from "react";
import { Article } from "./Article";
import { Form } from "./Form";

export const Main = (props) => {
    const articles = props.articles;

    const [articlesArray, setArticlesArray] = useState(articles);
    const [newArticle, setNewArticle] = useState("");

    return (
        <main className="container">
            <h3>Ecco gli ultimi articoli:</h3>
            <ul className="list-group list-group-flush mb-4"> 
                {articlesArray.map((element, i) => <Article key={i} article={element}/>)}
            </ul>
            <Form newArticle={newArticle} setNewArticle={setNewArticle} articlesArray={articlesArray} setArticlesArray={setArticlesArray}/>
        </main>
    )
}