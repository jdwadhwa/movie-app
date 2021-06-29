//import { func } from "prop-types";
import react from "react";

import {data} from "./data"

import Moviecard from "./moviecard";

import Navbar from "./navbar";

import { change } from "../actions";

class app extends react.Component
{
    constructor(props)
    {
        super(props);
        this.checkfavourite = this.checkfavourite.bind(this);

       // console.log(this.props.store.getState());
    }

    componentDidMount()
    {
        this.props.store.subscribe(()=>{
            this.forceUpdate();
        })
    }

    checkfavourite(movie)
    {
       // console.log(this.props.store.getState())
         var idx = this.props.store.getState().movies.favourites.indexOf(movie);
         //   console.log(idx);
         if(idx!=-1)
         {
             return true;
         }
         else{
             return false;
         }
         //   Moviecard.forceUpdate();
    }


    changethetab(val)
    {
        this.props.store.dispatch(change(val));

    }


    render()
    {
        var arr;
        if(this.props.store.getState().movies.showtab==true)
        {
            var  m = this.props.store.getState().movies.favourites;
             console.log("heelo i am jatin waiting");
            arr = m.map(ele=>{
                return(<Moviecard movie = {ele} store = {this.props.store} checkfavourite = {this.checkfavourite}></Moviecard>)
            }) 
        }
        else{
           arr =  data.map(ele=>{
                return(<Moviecard movie = {ele} store = {this.props.store} checkfavourite = {this.checkfavourite}></Moviecard>)
            })
        }

         
        return(
    
            <div>
                <Navbar store = {this.props.store}/>
                <div className = "main">
                    <div className = "tabs">
                    <div className = {`tab ${this.props.store.getState().movies.showtab?'':'active-tabs'}`} onClick = {()=>{this.changethetab(false)}}>Movies</div>
                    <div className = {`tab ${this.props.store.getState().movies.showtab?'active-tabs':''}`} onClick = {()=>{this.changethetab(true)}}>Favourites</div>
                    </div>
                   
                </div>
                <div className = "List">
                    {arr}
                </div>
            </div>
            )
    }
    }

    


export default app;