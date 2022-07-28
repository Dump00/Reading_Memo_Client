import { useState } from "react"
import Book from "../../model/Book"
import User from "../../model/User"
import './userdb.css'

const UserDashBoard: React.FC<{bookList: Book[], userDataList: User}> = ({bookList, userDataList}) => {
    

    const[searchedData, setSearchedData] = useState<Book[]>([])
    const[list, setList] = useState<Book[]>([])

    const handleReading = () => {
        const books = userDataList.readingList
        setList(books)
    }

    const handleToRead = () => {
        const books = userDataList.toReadList
        setList(books)
    }

    const handleRead = () => {
        const books = userDataList.readList
        setList(books)
    }


    const searchBooks = (event: any) => {
        const input = event.target.value
        const filtered: Book[] = bookList.filter(book=> book.title.toLowerCase().includes(input))
        setSearchedData(filtered)
    }

    return(
        <div className="row mt-5 col-8 m-auto">
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
            <div className="dropdownn">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            BOOK SHELVES
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a onClick={handleReading} className="dropdown-item">Currently Reading</a></li>
                <li><a onClick={handleToRead} className="dropdown-item">To Read</a></li>
                <li><a onClick={handleRead} className="dropdown-item">Read</a></li>
            </ul>
            </div> 
            <div className="list-group col-8 m-auto mt-2">
                    {list.slice(0, 5).map(book => <a href="#" key={book.id} className="list-group-item list-group-item-action">{book.title}</a>)}
                </div>
            </div>
        </div>
    )
}

export default UserDashBoard