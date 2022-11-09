import React from 'react'
import './style.css'

export default function MovieList({ movies }) {

    // 랜더링 함수
    const render = movies.map((item) => {
    const movieRatingClass = item.rating >= 9 ? 'ratingGood' : item.rating >= 7 ? 'ratingSoso' : 'ratingBad'
    const movieHotIcon = item.rating >= 9 && '😀'
    const movieRating = item.rating || '평점없음'
    const movieImg = item.large_cover_image || item.medium_cover_image || item.small_cover_image || item.backgroung_image || item.backgroung_image_original

    return (
        <div className = 'movieListItem' key = {item.id}>
        <a className = 'movieTitle' href={item.url}>{item.title} {movieHotIcon}</a>
        <div className = 'movieRating'>편집 : <span className = {movieRatingClass}>{movieRating}</span> / 10</div>
        <img className = 'movieImage' src ={movieImg} alt={item.title}></img>
        </div>
    )
    })

    return (
        <>
            {render}
        </>
    )
}
