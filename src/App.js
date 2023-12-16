import logo from './logo.svg';
import './index.css';
import Head from './components/Head';
import Body from './components/Body';

function App() {
  return (
    <div >
   <h1 className="text-green-900 text-3xl font-bold">This is Youtube clone</h1>
      
      <Head/>
      <Body/>
    </div>
  );
}

export default App;
