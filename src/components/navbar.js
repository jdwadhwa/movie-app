import react from "react";

import { fetchmovie } from "../actions";

class navbar extends react.Component{

constructor(props)
{
    super(props);
    this.state = {
        showsearchresults:true,
    }
    this.gettext  =this.gettext.bind(this);
    this.handelsearch  =this.handelsearch.bind(this);
}

// handeladdtomovies(movie)
// {
//     this.props.store.dispatch(addmovietolist(movie));
//     this.setState({
//         showsearchresults:false,
//         searchterm : null
//     })
// }



gettext(e)
{
    this.setState({
        searchterm:e.target.value
    })
}

handelsearch()
{
    const movie  = this.state.searchterm;
    this.props.store.dispatch(fetchmovie(movie));
}
 
render()
{
    return(
        <div className = "nav">
            <div className = "search-container">
                <input onChange = {this.gettext}/>
                <button id = "search-btn" onClick = {this.handelsearch} >Search</button>
            </div>

        </div>
    )
}



}

export default navbar;
