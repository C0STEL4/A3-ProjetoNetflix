const API_KEY = 'ed2807898f36c2f5d27482cbab77447f';
const API_BASE = 'https://api.themoviedb.org/3';

/*
A aplicação solicitará: Os originais netflix, filmes em alta, mais curtidos, ação, romance, terror e
comédia
*/

const basicFetch = async (endpoint) => {
    const request = await fetch (`${API_BASE}${endpoint}`);
    const json = await request.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch (`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'trending',
                title: 'Filmes em alta',
                items: await basicFetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Mais Curtidos',
                items: await basicFetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },{
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },{
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },{
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            
        ];
        
    }

}