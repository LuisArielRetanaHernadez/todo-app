
// ROUTER-DOM
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// VISTAS
import TodoApp from './views/TodoApp';
import TodoPaperBin from './views/TodoPaperBin';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route component={TodoApp} exact path='/' />
          <Route component={TodoPaperBin} exact path='/Papelera' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
