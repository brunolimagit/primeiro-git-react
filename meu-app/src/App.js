import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/Helloworld';

function App() {
  const url ='https://via.placeholder.com/150'
  return (
    <div className="App">
      <header className="App-header">
        <img src={url}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <HelloWorld nome="Bruno Lima"/>
         
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
