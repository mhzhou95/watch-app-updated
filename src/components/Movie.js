import React from 'react';

class Movie extends React.Component{
  constructor(props){
    super(props);
  }
  handleViewMovie = ()=>{
    if(this.props.title){
      let url = "https://www.themoviedb.org/movie/" + this.props.id;
      window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      );
    }else if (this.props.name){
      let url = "https://www.themoviedb.org/tv/" + this.props.id;
      window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  }

  render = () =>{
    return (
      <div className="movieWrapper">
      {this.props.voteAverage>0 && 
        <div className="movie">
        <img src= {"http://image.tmdb.org/t/p/w185/" + this.props.posterPath} alt="Poster" className="poster"/>
        <div>
          {this.props.title&& <h2 className = "title">{this.props.title}</h2>}
          {this.props.name&& <h2 className = "title">{this.props.name}</h2>}
          <h4>Rating: {this.props.voteAverage}</h4>
          {this.props.releaseDate&& <h4>Release Date: {this.props.releaseDate}</h4>}
        </div>
        <div className="movie-summary">
          <p className="summary">{this.props.overview}</p>
          <button className="view-button" onClick = {this.handleViewMovie}>view</button>
        </div>
        </div>}
      </div>
    );
  }
}


export default Movie;