import logo from './logo.svg';
import './App.css';


import Hello from './components/Hello'; 
import ListPerson from './components/ListPerson'; 

function App() {
  return (
    <div>
      <p>Hello, <strong>React</strong>!</p>
      
      <Hello />
      <ListPerson />
    </div>
  );
}

export default App;