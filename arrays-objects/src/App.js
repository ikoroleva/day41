import logo from './logo.svg';
import './App.css';
import books from './books.json';
import { Book } from './Book';

function App() {
  return (
    <div className="book-list">

      {books.map((book, i) => (
        <Book book={book} key={i} />

      ))}

    </div>
  );
}

export default App;
