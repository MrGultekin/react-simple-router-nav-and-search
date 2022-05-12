import './App.scss'
import {PageWelcome} from "./pages/PageWelcome";
import {PageBooks} from "./pages/PageBooks";
import {PageAbout} from "./pages/PageAbout";
// import {useState} from "@types/react";
import {useState} from "react";

function App() {
    const [currentPage, setCurrentPage] = useState('welcome');
    return (
        <div className="App">
            <h1>Personal Site</h1>
            <hr/>
            <span onClick={() => setCurrentPage('welcome')}>Welcome</span> |
            <span onClick={() => setCurrentPage('books')}> Books</span> |
            <span onClick={() => setCurrentPage('about')}> About</span>
            <hr/>
            {currentPage === 'welcome' && <PageWelcome/>}
            {currentPage === 'books' && <PageBooks/>}
            {currentPage === 'about' && <PageAbout/>}
        </div>
    )
}

export default App
