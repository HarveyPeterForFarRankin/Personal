import './App.css';
import Test from './Components/Draggable/Nav';
import Drag from './HOC/Draggable';
const Testing = Drag(Test)

function App() {
  return (
    <div>
     <Testing/>
    </div>
  );
}

export default App;
