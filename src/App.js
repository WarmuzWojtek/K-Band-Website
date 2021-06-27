
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx'
import People from './Components/People/People.jsx'
import Places from './Components/Places/Places.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Media from './Components/Media/Media.jsx'
import Archive from './Components/Archive/Archive.jsx'
import GuestBook from './Components/GuestBook/GuestBook.jsx'
import Discography from './Components/Discography/Discography.jsx'
import Home from './Components/Home/Home.jsx'
import RecordingCard from './Components/Discography/RecordingCard.jsx'
import {ViewportProvider} from './Hook/useViewport'




function App() {
  return (
    <ViewportProvider>
    <BrowserRouter>
      <div >
        <div>
          <NavBar/>
        </div>
        <section>
          <Route path="/" exact component={Home}></Route>
          <Route path="/ludzie" exact component={People}></Route>
          <Route path="/miejsca" exact component={Places}></Route>
          <Route path="/plyty" exact component={Discography}></Route>
          <Route path="/media" exact component={Media}></Route>
          <Route path="/archiwalia" exact component={Archive}></Route>
          <Route path="/ksiega" exact component={GuestBook}></Route>
          <Route path="/plyty/:id" render={(props) => <RecordingCard {...props}  />} />

        </section>
        <Footer/>
     </div>
    </BrowserRouter>
    </ViewportProvider>
  );
}

export default App;
