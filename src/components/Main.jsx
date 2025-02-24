import { Article } from "./Article";

export const Main = (props) => {
    const articles = props.articles;

    return (
        <main className="container">
            <h3>Ecco gli ultimi articoli:</h3>
            <ul>
                {
                    articles.map(element => <Article article={element}/>)
                }
            </ul>
        </main>
    )
}