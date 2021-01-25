import {Menu, Home, Characters, Quotes} from './components';
import { HashRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Menu/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/quotes" component={Quotes}/>
      </Switch>
    </HashRouter>

  );
}

export default App;
