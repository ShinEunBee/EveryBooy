import logo from './logo.svg';
import './App.css';
import RenderHeader from './src/RenderHeader';
import RenderBody from './src/RenderBody';
import './src/cal.css';

function App() {
  return (
    <div className='cal-app'>
      <div>
        <RenderHeader></RenderHeader>
        <RenderBody></RenderBody>
      </div>
    </div>
  );
}

export default App;
