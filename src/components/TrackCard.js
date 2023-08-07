import React from "react";

function TrackCard(props) {
    const { track } = props;
    return (
        <div className="TrackCard">
            <h3>{ track.artist_name }</h3>
            <p>Track: { track.track_name }</p>
            <p>Album: { track.album_name }</p>
            <a className="TrackCard-link" href="/lyrics">View Lyrics</a>
        </div>
    )
}

export default TrackCard;