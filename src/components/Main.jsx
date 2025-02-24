import { Article } from "./Article";
import { Form } from "./Form";

export const Main = (props) => {
    const articles = props.articles;

    return (
        <main className="container">
            <h3>Ecco gli ultimi articoli:</h3>
            <ul className="list-group list-group-flush mb-4"> 
                {
                    articles.map(element => <Article article={element}/>)
                }
            </ul>
            <Form/>
        </main>
    )
}