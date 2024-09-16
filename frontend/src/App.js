import React from 'react'
import Home from './component/Home';
import ShowBook from './component/ShowBook';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateBook from './component/CreateBook';
import EditBook from './component/EditBook';
import DeleteBook from './component/DeleteBook';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBook/>} />
        <Route path="/books/create" element={<CreateBook/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} />
        <Route path="/books/delete/:id" element={<DeleteBook/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
