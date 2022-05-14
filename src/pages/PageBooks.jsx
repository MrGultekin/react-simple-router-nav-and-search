import {useEffect, useState} from "react";
import axios from "axios";

const booksURL='https://gutendex.com/books/?search=berlin';
export const PageBooks = () => {
    const [bookData,setBookData] = useState({count:0,results:[]});
    useEffect(() =>{
        (async () =>{
            setBookData((await axios.get(booksURL)).data);
        })()
    },[]);

    return (
        <>
            <h1>Books</h1>
            <p>There are {bookData.count} books yet.</p>

            {bookData.results.map((book,index) => {
                return (
                    <div className="book">
                        <div className="title">{book.title}</div>
                    </div>
                )
            })}

        </>
    )
}