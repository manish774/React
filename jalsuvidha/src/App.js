import logo from './logo.svg';
import './App.css';
import Cakecontainer from "./components/Home";
import {Provider} from "react-redux"
import store from "./redux/store";
import "./css/common.css"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cakecontainer/>
    </div>
    </Provider>
    
  );
}

export default App;
