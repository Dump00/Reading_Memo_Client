import Book from "./Book"
import User from "./User"

const readList = [
    new Book(1, "The Gambler", "Fyodor Dostoevsky", 240),
    new Book(2, "Miami Blues", "Charles Willeford", 208),
    new Book(3, "The Cat in the Hat", "Dr. Seuss", 61),
    new Book(4, "The Puppet Show", "M.W. Craven", 352),
    new Book(5, "Pet Sematary", "Stephen King", 580)
]

const toReadList = [
    new Book(1, "Norse Mythology", "Neil Gaiman", 301),
    new Book(2, "Lord of the Flies", "William Golding", 182),
    new Book(3, "The 39 Steps", "John Buchan", 100),
    new Book(4, "The Man in the High Castle", "Philip K. Dick", 259),
    new Book(5, "He Who Whispers", " John Dickson Carr", 165)
]

const readingList = [
    new Book(1, "Watchmen", "Alan Moore ", 416),
    new Book(2, "And Then There Were None", "Agatha Christie", 264)
]



const DATA = [
    new User(1, "LadyGaga", readingList, readList, toReadList),
    new User(1, "FunkyFresh", readingList, readList, toReadList),
    new User(1, "ChillTime", readingList, readList, toReadList)
]

export default DATA