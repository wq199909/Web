import React, {useEffect} from 'react'
import { fetchMovies } from '../../store/action/movies';
import { connect } from 'react-redux';
function Page({movies = [], loadMovies}) {
    useEffect(() => {
        if(window.requestPath==="/movies"){
            console.log(movies)
        }else{
            loadMovies && loadMovies();
        }
    }, [])
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(m=>(
                    <li key={m._id}>{m.name}</li>
                ))}
            </ul>
        </div>
    )
}
Page.loadData = async function(store){
    await store.dispatch(fetchMovies())
}
function mapStateToProps(state){
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadMovies(){
            dispatch(fetchMovies())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);