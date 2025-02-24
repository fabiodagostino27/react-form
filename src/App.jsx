import { Header } from "./components/Header";
import { Main } from "./components/Main";

const articles = [
    "La nuova era dell'intelligenza artificiale: cosa aspettarsi nel 2025",
    "Le città del futuro: come la tecnologia cambierà il nostro modo di vivere",
    "Cibo e sostenibilità: come mangiare meglio senza danneggiare il pianeta",
    "Il ritorno della natura: come le piante stanno conquistando gli spazi urbani",
    "Blockchain oltre la criptovaluta: le applicazioni che cambieranno il mondo"
];

function App() {
    return (
        <>
            <Header/>
            <Main articles={articles}/>
        </>
    )
};

export default App;
