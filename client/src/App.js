import './App.css';
import Main from './views/Main';
import Pet from './components/Pet'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateForm from './components/UpdateForm';
import NavBar from './components/NavBar';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path='/' element={<Main/>} />
          <Route path='/api/getOnePet/:id' element={<Pet />} />
          <Route path='/api/updatePet/:id' element={<UpdateForm/>} />
          <Route path='/api/createPet/' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;