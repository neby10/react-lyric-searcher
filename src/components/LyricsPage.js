import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

function LyricsPage() {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});

    const { track_id } = useParams();

    useEffect(() => {
        const lyrics_url = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${api_key}`;
        const track_url = `http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${track_id}&apikey=${api_key}`;

        axios.get(track_url).then(response => {
            let track_data = response.data.message.body.track;
            console.log("track_data: ", track_data);
            setTrack({ track_data });
        }
        ).catch( err => {
            console.log(err);
        });

        axios.get(lyrics_url).then(response => {
            let lyrics_data = response.data.message.body.lyrics;
            console.log("lyrics_data:", lyrics_data);
            setLyrics({ lyrics_data });
        }).catch(err => {
            console.log(err);
        });
    }, [track_id]);

    return (
        <div className="LyricsPage">
            <h1>Lyrics Page</h1>
            <p>{ track_id }</p>
            <p>Track: { track.track_name }</p>
            <p>Lyrics: { lyrics.lyrics_body }</p>
            <Link to="/">Return Home</Link>
        </div>
    )
}

export default LyricsPage;