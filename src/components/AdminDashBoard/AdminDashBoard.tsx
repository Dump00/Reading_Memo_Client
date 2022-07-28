import { useState } from "react"
import Book from "../../model/Book"

const AdminDashBoard: React.FC<{bookList: Book[]}> = ({bookList}) => {

    const[searchedData, setSearchedData] = useState<Book[]>([])
    const[titleIn, setTitleIn] = useState('')
    const[authorIn, setAuthorIn] = useState('')
    const[pagesIn, setPagesIn] = useState('')

    const searchBooks = (event: any) => {
        const input = event.target.value
        const filtered: Book[] = bookList.filter(book=> book.title.toLowerCase().includes(input))
        setSearchedData(filtered)
    }

    const addNewBook = () => {
        const newBook = new Book(Math.random(), titleIn, authorIn, parseInt(pagesIn))
        console.log(newBook);
        
    }

    const handleTitleChange = (event: any) => {
        setTitleIn(event.target.value)
    }

    const handleAuthorChange = (event: any) => {
        setAuthorIn(event.target.value)
    }

    const handlePagesChange = (event: any) => {
        setPagesIn(event.target.value)
    }

    return(
        <div className="row mt-5">
            <div className="col-6">
                <div className="col-8 m-auto">
                <input onChange={searchBooks} type="text" id="inputText" className="form-control" placeholder="Search Here"/>
            <div className="list-group mt-2">
                {searchedData?.length == 0  ? <p className="m-auto">Serach Books!</p> :
                searchedData.slice(0, 5).map(book => <a href="#" key={book.id} className="list-group-item list-group-item-action">{book.title}</a>)}
            </div>
                </div>

            </div>
            <div className="col-6">
                <h3 className="text-center">Add A New Book</h3>
                <form className="col-8 m-auto">
                <div className="mb-3">
                    <input value={titleIn} onChange={handleTitleChange} type="text" className="form-control" id="bkTitle" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <input value={authorIn} onChange={handleAuthorChange} type="text" className="form-control" id="bkAuthor" placeholder="Author" />
                </div>
                <div className="mb-3">
                    <input value={pagesIn} onChange={handlePagesChange} type="number" className="form-control" id="bkPages" placeholder="Pages" />
                </div>
                <button type="button" onClick={addNewBook} className="btn btn-dark col-12">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashBoard