import './App.css';
import FirstBlock from './FirstBlock/FirstBlock.jsx';
import Footer from './Footer/Footer';
import FourBlock from './FourBlock/FourBlock';
import ThreBlock from './ThreBlock/ThreBlock.jsx';
import TwoBlock from './TwoBlock/TwoBlock.jsx';

function App() {
  return (
    <div className="App">
        <FirstBlock />
        <TwoBlock />
        <ThreBlock />
        <FourBlock/>
        <Footer />
    </div>
  );
}

export default App;
