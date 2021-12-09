import React from "react"

function UpcomingAnime( { upcomingAnime } ) {
    return (
        <aside>
            <nav>
                <h3>Upcoming Anime</h3>
                { upcomingAnime.map(anime => (
                    <a href={ anime.url } target="_blank" key={ anime.mal_id } rel="noreferrer">{ anime.title }</a>
                ))}
            </nav>
        </aside>
    )
}

export default UpcomingAnime
