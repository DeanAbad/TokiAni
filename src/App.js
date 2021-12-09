import { useState, useEffect } from 'react'
import Header from './components/Header'
import TopAnime from './components/TopAnime'
import UpcomingAnime from './components/UpcomingAnime'
import Contents from './components/Contents'

function App() {
	const [ animeList, SetAnimeList ] = useState([])
	const [ topAnime, SetTopAnime ] = useState([])
	const [ upcomingAnime, SetUpcomingAnime ] = useState([])
	const [ search, SetSearch ] = useState("")

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res => res.json())

		SetTopAnime(temp.top.slice(0, 5))
	}

	const GetUpcomingAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`).then(res => res.json())

		SetUpcomingAnime(temp.top.slice(0, 5))
	}

	const HandleSearch = event => {
		event.preventDefault()

		FetchAnime(search)
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${ query }&order_by=title&sort=asc&limit=10`).then(res => res.json())

		SetAnimeList(temp.results)
	}

	useEffect(() => {
		GetTopAnime()
	}, [])

	useEffect(() => {
		GetUpcomingAnime()
	}, [])

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<div className="lists">
					<TopAnime topAnime={ topAnime } /><hr />
					<UpcomingAnime upcomingAnime={ upcomingAnime } />
				</div>
				<Contents HandleSearch={ HandleSearch } search={ search } SetSearch={ SetSearch } animeList={ animeList } />
			</div>
		</div>
	)
}

export default App
