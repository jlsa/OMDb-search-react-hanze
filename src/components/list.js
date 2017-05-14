import React from 'react';

import ListItem from './list_item';

const List = (props) => {
  if (!props.titles) {
    return <div>Loading...</div>;
  }

  const items = props.titles.map((video) => {
    return (
      <ListItem
        onTitleSelect={props.onTitleSelect}
        onVideoSelect={props.onVideoSelect}
        key={video.imdbID}
        video={video}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {items}
    </ul>
  );
}

export default List;
