import React from 'react';
import Image from './image';

const Detail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const imdbID = video.imdbID;
  return (
    <div className="video-detail col-md-8">
      <div className="poster">
        <div className="media-left">
          <Image
            className="media-object"
            src={video.Poster}
          />
        </div>
      </div>
      <div className="details">
        <div className="title">{video.Title}</div>
        <div>
          year: {video.Year}<br />
          actors: {video.Actors}<br />
          awards: {video.Awards}<br />
          box office: {video.BoxOffice}<br />
          country: {video.Country}<br />
          dvd: {video.DVD}<br />
          director: {video.Director}<br />
          genre: {video.Genre}<br />
          language: {video.Language}<br />
          metascore: {video.Metascore}<br />
          <div>
            plot: {video.Plot}
          </div>
          {/* poster: {video.Poster}<br /> */}
          production: {video.Production}<br />
          rated: {video.Rated}<br />
          {/* ratings: {video.Ratings.map((rating) => {return rating.Source + " " + rating.Value + ", "})}<br /> */}
          released: {video.Released}<br />
          runtime: {video.Runtime}<br />
          type: {video.Type}<br />
          website: {video.Website}<br />
          writer(s): {video.Writer}<br />
          year: {video.Year}<br />
          imdb rating: {video.imdbRating}<br />
          imdb votes: {video.imdbVotes}<br />
        </div>
      </div>
    </div>
  );
}

export default Detail;
