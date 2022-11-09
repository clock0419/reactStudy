import React, { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import TitleList from './components/TitleList'
import Counter from './components/Counter'

export default function App() {
  //JS
  const [movies, setMovies] = useState([]) 
  const [isCounter, setIsCounter] = useState(false)

  const onClick = () => {
    setIsCounter(!isCounter)
  }

  // useEffect ; 라이프사이클 구현
  // 사용법 ; useEffect(실행할 함수, Deps 배열)
  // useEffect(() => {console.log('start')}, []) // mounted
  // useEffect(() => {console.log('end')}, [movies]) // updated
  // useEffect(() => {return console.log('end')}, []) // unmounted

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => setMovies(json.data.movies))
  }, [])

  //XML
  return (
    <div className='App'>
      <button onClick={onClick}>스위치</button>
      {isCounter && <Counter/>}
      <TitleList />
      <MovieList movies = {movies}/>
    </div>
  )
}
