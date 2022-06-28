import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { Search } from './Search';




function App() {
  return (
    <div className="App">
      <Header />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <body> */}

      <div id="page">
        <div id="main">
          <Search />
          <div className="content">
            <h1>Products</h1>
            <ProductList />
          </div>
        </div>
        <Footer />
      </div>

      {/* </body> */}
    </div>
  );
}

export default App;
