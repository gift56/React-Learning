import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/navbar/Banner';
import Profile from './component/navbar/Profile';

function App() {
  document.title = "Navbar";
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Profile />
    </div>
  );
}

export default App;