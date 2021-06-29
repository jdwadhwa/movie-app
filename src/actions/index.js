

 export const addfavourite = "ADD_Favourite";

export const removefavourite = "REMOVE_FAVOURITE";

export const changetab = "CHANGE_TAB";

export  function addfavo(movie)
{
    return(
        {
            type  : addfavourite,
            data  : movie

        }
    )
}


export function removefavo(movie)
{

    return(
        {
            type: removefavourite,
            data:movie,
        }
    )

}


export function change(val)
{
    return(
        {
            type:changetab,
            value:val
        }
    )
}

export const FETCHING_MOVIE = "FETCHING_MOVIE";

export function fetchmovie(movie)
{
    return function(dispatch)
    {
        fetch("https://www.omdbapi.com/?apikey=f1ea5068&t="+movie).then(res=>res.json()).then(res2=>{ 
            console.log(res2);

            dispatch({
                type:addfavourite,
                data:res2
            })

        })
    }
}