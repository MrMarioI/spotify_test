import React, { Component } from 'react';
import axios from 'axios';
import './../App.css';

// https://api.spotify.com/v1/playlists/{playlist_id}/tracks
// https://api.spotify.com/v1/playlists/{playlist_id}
// const URL = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks"

// fetch('https://api.spotify.com/v1/playlists/').then((res) => {
//     res = res.json()
//     res.then((playlists) => {
//         console.log(playlists)
//     });
// });

class Playlist extends Component {
	state = {
		playlist: []
	};

	// useEffect(){

	// }

	render() {
		return (
			<div className="box col-sm-6 px-0">
				<div className="list-group">
					{/* {
                    playlist.map((item, idx) => 
                    <ul key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light"
                        id={item.tracks.id}>
                            
                            {item.track.name}
                    </ul>)
                } */}
				</div>
			</div>
		);
	}
}

export default Playlist;
