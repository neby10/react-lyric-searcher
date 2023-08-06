import React from "react";

function TrackCard() {

    return (
        <div className="TrackCard">
            <h3>Band Name</h3>
            <p>Track: Track Name</p>
            <p>Album: Album Name</p>
            <a className="TrackCard-link" href="/lyrics">View Lyrics</a>
        </div>
    )
}

export default TrackCard;