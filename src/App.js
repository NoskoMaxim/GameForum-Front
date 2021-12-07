import {BrowserRouter} from 'react-router-dom';
import './App.css';
import ForumBar from './components/ForumBar';
import ForumRouter from './components/ForumRouter';

function App() {
    return (
        <BrowserRouter>
            <ForumBar/>
            <ForumRouter/>
        </BrowserRouter>
    );
}

export default App;