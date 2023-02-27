import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
            <Routes>
              
              <Route path="/" exact element={<NotesListPage></NotesListPage>} />
              <Route path="/note/:id" element={<NotePage></NotePage>} />

            </Routes>
            <h6 className='make_ultra_small_text'>Made By JayVerma@2007</h6>
        </div>

        
      </div>
    </Router>
  );
}

export default App;
