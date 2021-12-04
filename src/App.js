import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MusicProvider from './context/MusicContext'
import Navbar from './components/Navbar'
import Letra from './components/Letra'
import Info from './components/Info'
import Galeria from './components/Galeria'
import Error from './components/Error'
import Favoritos from './pages/Favoritos'
import RedirectRuta from './components/RedirectRuta'


const App = () => {

 

  return (
    <MusicProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <RedirectRuta exact path="/letra" component={Letra}/>
          <RedirectRuta exact path="/artista" component={Info}/>
          <RedirectRuta exact path="/album" component={Galeria}/>
          <Route exact path="/favoritos" component={Favoritos}/>
          <Route path="*" component={Error}/>
        </Switch>
      </Router>
    </MusicProvider>
  )
}

export default App
