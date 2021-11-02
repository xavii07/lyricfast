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


const App = () => {
  return (
    <MusicProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/letra" component={Letra}/>
          <Route exact path="/artista" component={Info}/>
          <Route exact path="/album" component={Galeria}/>
          <Route exact path="/favoritos" component={Favoritos}/>
          <Route path="*" component={Error}/>
        </Switch>
      </Router>
    </MusicProvider>
  )
}

export default App
