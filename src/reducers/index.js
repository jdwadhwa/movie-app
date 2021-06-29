

import { addfavourite } from "../actions";

import { removefavourite } from "../actions";

import { changetab } from "../actions";

const initialmoviestate= {
    list:[],
    favourites:[],
    showtab:false
}

const initialsearchstate={
    results:{}
}

 function moviestate(state,action)
{
if(action.type=="add_movies")
{
    return {...state,list:action.movies}
}
else if(action.type===addfavourite)
{
   // console.log("done");
    return{...state,favourites:[...state.favourites,action.data]}
}
else if(action.type===removefavourite)
{
    var x = state.favourites.filter(ele=>{return ele!=action.data})
    console.log("removed a movie from favourites");
    return{...state,favourites:x}
}
else if(action.type===changetab)
{
    var z = action.value;
    console.log(z+" here i am in movie reducer");
    return{...state,showtab:z}
}


return state;
}

function searchstate(state,action)
{
    return 1;
}

const initialrootstate = {
    movies:initialmoviestate,
    search:initialsearchstate,
}

export default function rootreducer(state = initialrootstate,action)
{
return (
    {
        movies: moviestate(state.movies,action),
        search : searchstate(state.search,action)
    }
)


}





