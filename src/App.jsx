import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import SoundSection from './components/SoundSection'
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
