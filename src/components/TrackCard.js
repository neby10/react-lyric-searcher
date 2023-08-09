import React from "react";
import { Link } from "react-router-dom";

function TrackCard(props) {
    const { track } = props;
    return (
        <div className="TrackCard">
            <h3>{ track.artist_name }</h3>
            <p><strong>Track: </strong>{ track.track_name }</p>
            <p><strong>Album: </strong>{ track.album_name }</p>
            <Link to={`/lyrics/${track.track_id}`} className="TrackCard-link">View Lyrics</Link>
        </div>
    )
}

export default TrackCard;