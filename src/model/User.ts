import Book from "./Book"

class User {
    userId: number
    userName: string
    readingList: Book[]
    readList: Book[]
    toReadList: Book[]

    constructor(userId: number, userName: string, readingList: Book[], readList: Book[], toReadList: Book[]) {
        this.userId = userId
        this.userName = userName
        this.readingList = readingList
        this.readList = readList
        this.toReadList = toReadList
    }
}

export default User;