
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home';
import Post from './containers/Post';
function App() {
  return (
     <main>
       <section>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/> 
            <Route path='/:subject/:id' exact component={Post}/>
          </Switch>
        </Router>
       </section>
     </main>
  );
}

export default App;
