import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom' 
import Feed from './feed'
import Favourites from './favourites'
import Trending from './trending'
import Player from './player'
import Library from './library'
export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library/>} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/player" element={<Player/>} />
        </Routes>
    </Router>
  )
}
