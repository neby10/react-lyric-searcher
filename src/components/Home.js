import React, { useState } from "react";
import TrackCard from './TrackCard';
import SearchButton from './SearchButton';
import axios from 'axios';

function Home() {
    const [searchVal, setSearchVal] = useState("");
    const [data, setData] = useState({});

    const handleSearch = () => {
        console.log("handleSearch called");
        console.log("searchVal:", searchVal);
        // axios.get(

        // ).then(
        //   response => {
        //     setData(response.data);
        //   }
        // ).catch(
        //   error => {
        //     console.log("error fetching data: ", error)
        //   }
        // );
    }

    return (
        <div className="Home">
            <h2 className='white'>Search Songs Based on Lyrics</h2>
            <label className='white'>Search Bar</label>
            <input type="text" value={searchVal} onChange={(event) => setSearchVal(event.target.value)} placeholder="Knocking on heaven's door..." />
            <SearchButton onClick={handleSearch}></SearchButton>
            <h3 className='white'>Top Tracks</h3>
            <div className='top-tracks-div'>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
                <TrackCard ></TrackCard>
            </div>
        </div>
    )
}

export default Home;