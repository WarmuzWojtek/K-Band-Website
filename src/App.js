
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx'
import People from './Components/People/People.jsx'
import Places from './Components/Places/Places.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Media from './Components/Media/Media.jsx'
import Discography from './Components/Discography/Discography.jsx'
import Home from './Components/Home/Home.jsx'




function App() {
  return (
    <BrowserRouter>
      <div >
        <header>
          <NavBar/>
        </header>
        <section>
          <Route path="/" exact component={Home}></Route>
          <Route path="/ludzie" exact component={People}></Route>
          <Route path="/miejsca" exact component={Places}></Route>
          <Route path="/plyty" exact component={Discography}></Route>
          <Route path="/media" exact component={Media}></Route>
     
        </section>
        <Footer/>
     </div>
    </BrowserRouter>
  );
}

export default App;
