import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes} from './Routes'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
