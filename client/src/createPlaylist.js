export const createPlaylist = async (name, token, uris) => {
    const userProfileUrl = 'https://api.spotify.com/v1/me';

    try {
        const body = await fetch(userProfileUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const response = await body.json();
        const userId = response.id;
        console.log(userId)
        
        const playlistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
        const playlistData = {
            name: name,
            description: 'New playlist description',
            public: false
        };

        const bodyPlaylist = await fetch(playlistUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playlistData)
        })
        const responsePlaylist = await bodyPlaylist.json();
        const playlistId = responsePlaylist.id;

        const addTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        const tracksBody = {
            uris: uris,
            position: 0
        }

        const tracksResponse = await fetch(addTracksUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tracksBody)
        })

        const tracksResult = await tracksResponse.json();
        console.log(tracksResult)

        console.log(playlistId)


    }catch (error) {
        console.error('Error creating playlist:', error);
        return -1;
    }



}
