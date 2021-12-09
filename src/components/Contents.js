import React from "react"
import AnimeCard from "./AnimeCard"

function Contents(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={ props.HandleSearch }>
                    <input type="search" placeholder="Search an anime" required value={ props.search } onChange={ event => props.SetSearch(event.target.value) }/>
                </form>
            </div>
            <div className="anime-list">
                { props.animeList.map(anime => (
                    <AnimeCard anime={ anime } key={ anime.mal_id } />
                )) }
            </div>
        </main>
    )
}

export default Contents
