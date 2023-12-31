import React, { useEffect, useState } from "react";
import TrackCard from './TrackCard';
import SearchButton from './SearchButton';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

function Home() {
    const [searchVal, setSearchVal] = useState("");
    const [trackTitle, setTrackTitle] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${api_key}`
        
        axios.get(url)
        .then(
          response => {
            setData(response.data.message.body.track_list);
            console.log("data retrieved: ", data);
          }
        ).catch(
          error => {
            console.log("error fetching data: ", error)
          }
        );
    }, [trackTitle])

    const handleSearch = () => {
        console.log("handleSearch called");
        console.log("searchVal:", searchVal);
        setTrackTitle(searchVal);
    }

    let tracksJSX = <></>
    if (data === undefined || data.length === 0) {
        tracksJSX = (
            <div className='top-tracks-div'>
                <p>No tracks yet.</p>
            </div>
        )
    } else {
        tracksJSX = (
            <div className='top-tracks-div'>
                {Object.values(data).map((item) => (
                    <TrackCard key={item.track.track_id} track={item.track} />
                    ))
                }
            </div>
        );
    }
    return (
        <div className="Home">
            <h2 className='white'>Search Songs Based on Track</h2>
            <label className='white'>Search Bar</label>
            <input type="text" value={searchVal} onChange={(event) => setSearchVal(event.target.value)} placeholder="Knocking on heaven's door..." />
            <SearchButton onClick={handleSearch}></SearchButton>
            <h3 className='white'>Top Tracks</h3>
            {tracksJSX}
        </div>
    )
}

export default Home;