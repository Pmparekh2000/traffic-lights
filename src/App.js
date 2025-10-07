import logo from './logo.svg';
import './App.css';
import Traffic from './components/Traffic';
import { SIGNAL_CONFIGURATION } from './utils/signalConfiguration';

function App() {
  return (
    <div className="App">
      <Traffic lights={SIGNAL_CONFIGURATION}/>
    </div>
  );
}

export default App;
