import React from 'react'

const VideoCard = ({info}) => {
    const{ snippet, statistics } = info;
    const{channelTitle,title,thumbnails} = snippet;
  return (
    <div>
      <img alt="video" src = {thumbnails.high}/>
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
        <li></li>

      </ul>
    </div>
  )
}

export default VideoCard;
