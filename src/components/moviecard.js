import react from "react";


import {addfavo} from "../actions/index";

import {removefavo} from "../actions/index";

class Moviecard extends react.Component{

constructor(props)
{
    super(props);

    this.handelfavourite = this.handelfavourite.bind(this);

    this.handelunfavourite = this.handelunfavourite.bind(this);
}


handelfavourite()
{
    this.props.store.dispatch(addfavo(this.props.movie));
  //  console.log("movir added");
   // console.log(this.props.store.getState());
}

handelunfavourite()
{

    this.props.store.dispatch(removefavo(this.props.movie));

   // console.log(this.props.store.getState());

}
 



render()
{
  //  console.log(this.props.checkfavourite(this.props.movie));
 
    return (
        <div className = "movie-card">
            <div className = "left">
                <img alt = "movie-poster" src = {this.props.movie.Poster}></img>

            </div>
            <div className = "right">
                <div className = "title">{this.props.movie.Title}</div>
                <div className = "plot">{this.props.movie.Plot}</div>
                <div className = "footer">
                    <div className = "rating">{this.props.movie.imdbRating}</div>
                    {
                        this.props.checkfavourite(this.props.movie)?<button className = "unfavourite-btn" onClick = {this.handelunfavourite}>unFavourite</button>:<button className = "favourite-btn" onClick = {this.handelfavourite}>Favourite</button>
                       
                    }
                    
                </div>
            </div>
        </div>
    )
}



}

export default Moviecard;