import './styles/index.js';
import Canvas from './components/Canvas';
import Header from './components/Header';
import Me from './components/Me';

function App() {
  return (
    <div className="App">
      <Header/>
      <Canvas 
        width={480}
        height={480}
      />
      <Me/>
    </div>
  );
}

export default App;
