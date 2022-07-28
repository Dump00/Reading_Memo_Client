import { useState } from "react"
import Book from "../../model/Book"
import './userdb.css'

const UserDashBoard: React.FC<{bookList: Book[]}> = ({bookList}) => {

    const[searchedData, setSearchedData] = useState<Book[]>([])

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
                Dropdown button
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
            </div> 
            </div>
        </div>
    )
}

export default UserDashBoard