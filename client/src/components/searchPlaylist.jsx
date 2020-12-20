import React, {useEffect, useState} from 'react';
import { useStateValue } from '../stateProvider';
import './../App.css';

const SearchPlaylist = (props) => {
    const [{playlists}] = useStateValue();
    const [currentPlaylist, setCurrentPlaylist] = useState("");
    const [displayMusic, setDisplayMusic] = useState(""); 


	const dropdownChanged = (e) => {
        setCurrentPlaylist(e.target.value);
    };
    
    console.log("TEST ICI", currentPlaylist);

    const displayPlaylist = () =>{
        setDisplayMusic(currentPlaylist);
        console.log("HEY HEY HEY", displayMusic);
    }

	return (
		<div className="form-control col-sm-6 form-group row px-0">
			<select
				onChange={dropdownChanged}
				className="form-control test form-control-sm col-sm-10"
			>
				<option key={0}>Selectionnez une playlist :</option>
                {playlists && playlists.items && playlists.items.length && playlists.items.map((item, idx) =>
                 {return <option key={idx + 1} value={item.id}>{item.name}</option>})}
			</select>
            <div className="box col-sm-6 px-0">
				<div className="list-group">
				{playlists && playlists.items && playlists.items.length && playlists.items.map((item, idx) =>
                 {return <li key={idx + 1} value={item.id}>{item.name}</li>})}
				</div>
			</div>
		</div>
	);
};

export default SearchPlaylist;
