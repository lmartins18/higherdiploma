import { useEffect, useState } from "react"
import axios from "axios";

export const Books = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
    const [editingBook, setEditingBook] = useState(null);

    // Fetch all books
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('http://localhost:8080');
            setBooks(response.data.books);
        };

        fetchData();
    }, []);

    // New book
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8080', newBook);
            setBooks([...books, newBook]); 
            setNewBook({ title: '', author: '', year: '' }); 
        } catch (error) {
            console.error('Error creating book:', error);
        }
    };

    // Handle book deletion
    const handleDelete = async (bookId) => {
        try {
            await axios.delete(`http://localhost:8080`, { data: { "book_id": bookId } });
            setBooks(books.filter((book) => book.id !== bookId)); 
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    // Edit book functionality
    const handleEdit = (book) => {
        setEditingBook({ "book_id": book.id, ...book });
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:8080`, editingBook);
            setBooks(books.map((book) => (book.id === editingBook.book_id ? editingBook : book)));
            setEditingBook(null);
        } catch (error) {
            console.error('Error editing book:', error);
        }
    };

    return (
        <>
            <h1>Book List</h1>
            {books?.length > 0 ? (
                <>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                {editingBook && editingBook.book_id === book.id ? (
                                    <form onSubmit={handleEditSubmit}>
                                        <label>
                                            Title:
                                            <input
                                                type="text"
                                                value={editingBook.title}
                                                onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                                            />
                                        </label>
                                        <label>
                                            Author:
                                            <input
                                                type="text"
                                                value={editingBook.author}
                                                onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                                            />
                                        </label>
                                        <label>
                                            Year:
                                            <input
                                                type="number"
                                                value={editingBook.year}
                                                onChange={(e) => setEditingBook({ ...editingBook, year: e.target.value })}
                                            />
                                        </label>
                                        <button type="submit">Save Changes</button>
                                        <button onClick={() => setEditingBook(null)}>Cancel</button>
                                    </form>
                                ) : (
                                    <>
                                        {book.title} - {book.author} ({book.year})
                                        <button onClick={() => handleEdit(book)}>Edit</button>
                                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    <h2>Add New Book</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input
                                type="text"
                                value={newBook.title}
                                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                            />
                        </label>
                        <label>
                            Author:
                            <input
                                type="text"
                                value={newBook.author}
                                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                            />
                        </label>
                        <label>
                            Year:
                            <input
                                type="number"
                                value={newBook.year}
                                onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                            />
                        </label>
                        <button type="submit">Add Book</button>
                    </form>
                </>) : (<h1>There are no books</h1>)

            }

        </>
    )
}