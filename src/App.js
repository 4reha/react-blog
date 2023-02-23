import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="react-blog/">
              <Home />
            </Route>
            <Route path="react-blog/create">
              <Create />
            </Route>
            <Route path="react-blog/blog/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
