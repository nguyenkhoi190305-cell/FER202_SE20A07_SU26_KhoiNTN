import logo from './logo.svg';
import './App.css';

function App() {
  let chao1 = (name) => console.log(`Xin chao, ${name}!`);
  //khai bao 1 doi tuong person co cac thuoc tinh id, name, age, address
  let person ={
    id: 1,
    name: "Bob",
    age: 30,
    address: "123 Main St"
  }
  return (
    <div className="App">
      <h1> Xin chao</h1>
      <h2> Toi la Khoi</h2>
      <button onClick={() => chao1("KhoiNTN")}>Goi ham chao1</button>
      <div className="card">
        <h3> Thong tin person:</h3>
        <p>ID: {person.id}</p>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Address: {person.address}</p>
      </div>
    </div>
  );
}

export default App;
