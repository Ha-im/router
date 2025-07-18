
import './App.css';

const Contact = ()=>{
  return (
    <div >
      <h2>Contact</h2>
      <p>Contact ...</p>
    </div>
  );
}

const Tasks = ()=>{
  return (
    <div >
      <h2>Tasks</h2>
      <p>Tasks ...</p>
    </div>
  );
}
const Home = ()=>{
  return (
    <div >
      <h2>Home</h2>
      <p>Home ...</p>
    </div>
  );
}

const App = ()=>{
  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <Home/> 
      <Tasks/>
      <Contact/>
    </div>
  );
}

export default App;
