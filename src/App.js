
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx'
import Header from './Components/Header/Header.jsx'
import Welcome from './Components/Welcome/Welcome.jsx'
import People from './Components/People/People.jsx'
import Places from './Components/Places/Places.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Media from './Components/Media/Media.jsx'
import Discography from './Components/Discography/Discography.jsx'
import MediaControlCard from './Components/AudioModal/AudioControls.jsx'



function App() {
  return (
    <div >
      <NavBar/>
      {/* <Header/>
      <Welcome/> */}
      <Media/>
      {/* <MediaControlCard/> */}
      <Footer/>
    </div>
  );
}

export default App;
