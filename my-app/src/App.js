import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/navbar/Banner';

function App() {
  document.title = "Navbar";
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;