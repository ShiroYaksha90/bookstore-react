import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
