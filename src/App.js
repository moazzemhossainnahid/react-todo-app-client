import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompleteTask from './Pages/CompleteTask/CompleteTask';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ToDo from './Pages/ToDo/ToDo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import EditTodo from './Pages/Home/EditTodo';

function App() {
  return (
    <div className="App pt-16">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/complete' element={<CompleteTask/>} />
        <Route path='/todo' element={<ToDo/>} />
        <Route path='/todo/:id' element={<EditTodo/>} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    <ToastContainer/>
    </div>
  );
}

export default App;
