import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import Carousel from './components/Carousel';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my3" >
    <TextForm heading="Enter text to analyze"/>
    {/* <Carousel/> */}
    </div>
    </>
  );
}

export default App;
