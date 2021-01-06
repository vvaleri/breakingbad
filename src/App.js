import {Menu, Home, Characters, Quotes} from './components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Menu/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/quotes" component={Quotes}/>
      </Switch>
      
    </Router>
    
   
  );
}

export default App;
