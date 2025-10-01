export const searchTrack = async (query, token) => {
    const baseUrl = 'https://api.spotify.com/v1/search';

    const params = new URLSearchParams({
        q: query,
        token: token,
        type: 'track',
        limit: 10,
        market: 'US'
    });

    try {
        const response = await fetch(`${baseUrl}?${params.toString()}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson.tracks.items.map(track => ({
                id: track.id,
                title: track.name,
                artist: track.artists.map(artist => artist.name).join(', '),
                album: track.album.name,
                uri: track.uri
            }))
        }
    }catch (error) {
        console.error('Error fetching data from Spotify API:', error);
        return -1;
    }
}