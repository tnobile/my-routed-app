import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const App = () => {
    const bgStyle = {
        color: 'orange',
        background:'pink',
        height: '100%',
    };

    return (
        <div className="App">
            <div>
                <nav className="topnav">
                    <ul id="navigation">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/here">Here</Link>
                        </li>
                        <li>
                            <Link to="/where">Where</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
