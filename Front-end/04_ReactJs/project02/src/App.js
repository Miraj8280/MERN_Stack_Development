import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Header from './components/Header';
import './styles/App.scss';
import './styles/Header.scss';

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
