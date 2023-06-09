import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './Blogdetails';
import NotFound from './NotFound';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
              <Create></Create>
              </Route>
              <Route path ="/blog/:id">
                <BlogDetails />
              </Route>
              <Route>
                <NotFound path="*"></NotFound>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
