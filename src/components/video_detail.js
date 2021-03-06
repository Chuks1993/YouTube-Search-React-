import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <img src='https://i.redd.it/ounq1mw5kdxy.gif' />
    }

    const videoId = video.id.videId
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;