
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx'
import Header from './Components/Header/Header.jsx'
import Welcome from './Components/Welcome/Welcome.jsx'
import People from './Components/People/People.jsx'
import Places from './Components/Places/Places.jsx'



function App() {
  return (
    <div >
      <NavBar/>
      {/* <Header/>
      <Welcome/> */}
      <Places/>
    </div>
  );
}

export default App;
