import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import MainApp from './Mainapp';

function App() {
  if (false){
    document.getElementById('body').className = "body"
    return (<Signin/>)
  }
  else{
    document.getElementById('body').className = ""
    return(<MainApp/>)
  }
}

export default App;
