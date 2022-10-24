import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';


function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: 'red',
      color: 'white',
      minHeight: '100vh',
    }
  }))

  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} exact />
          <Route path='/coins/:id' element={<Coinpage />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
