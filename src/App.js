import './styles/index.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <Canvas 
        width={300}
        height={300}
      />
    </div>
  );
}

export default App;
