import React from 'react';

const itemStyle = {
  padding: '10px',
  textAlign: 'center',
  listStyleType: 'none'
}

const ListItem = ({video, onVideoSelect, onTitleSelect}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <li
      // onClick={() => onVideoSelect(video)}
      onClick={() => onTitleSelect(video)}
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-body">
          <div className="media-heading">{video.Title}</div>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
