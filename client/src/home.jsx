import React, { useState, useEffect } from 'react';
import ButtonDisplay from './components/buttonDisplay'
import Playlist from './components/playlist'
import Login from './components/login'
import SpotifyWebApi from "spotify-web-api-js";
import SearchPlaylist from './components/searchPlaylist'
import { useStateValue } from './stateProvider';
import { Avatar } from '@material-ui/core';
import logo from './assets/icons/CMYK/PNG/Spotify_Icon_Green.png';
// import axios from 'axios';
import './App.css';

// https://api.spotify.com/v1/playlists/{playlist_id}/tracks
// https://api.spotify.com/v1/playlists/{playlist_id}

function Home() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="title">Spotify Test</h1>
    <p className="playlist">Vos playlists</p>
    <SearchPlaylist className="search"/>
    <Playlist />
  </div>
  );
}

export default Home;