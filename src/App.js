import sketch from './sketch';
import { ReactP5Wrapper } from 'react-p5-wrapper';

function App() {
  return (
    <div className="App bg-black">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default App;
