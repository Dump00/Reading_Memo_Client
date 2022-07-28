import { useState } from "react"
import Book from "../../model/Book"

const AdminDashBoard: React.FC<{bookList: Book[]}> = ({bookList}) => {

    const[searchedData, setSearchedData] = useState<Book[]>([])

    const searchBooks = (event: any) => {
        const input = event.target.value
        const filtered: Book[] = bookList.filter(book=> book.title.toLowerCase().includes(input))
        setSearchedData(filtered)
    }

    return(
        <div className="row mt-5">
            <div className="col-6">
                <div className="col-8 m-auto">
                <input onChange={searchBooks} type="text" id="inputText" className="form-control" placeholder="Search Here"/>
            <div className="list-group mt-2">
                {searchedData?.length == 0  ? <p className="m-auto">Serach Books!</p> :
                searchedData.slice(0, 5).map(book => <a href="#" className="list-group-item list-group-item-action">{book.title}</a>)}
            </div>
                </div>

            </div>
            <div className="col-6">
                <h3 className="text-center">Add A New Book</h3>
                <form className="col-8 m-auto">
                <div className="mb-3">
                    <input type="text" className="form-control" id="bkTitle" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="bkAuthor" placeholder="Author" />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" id="bkPages" placeholder="Pages" />
                </div>
                <button type="submit" className="btn btn-dark col-12">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashBoard