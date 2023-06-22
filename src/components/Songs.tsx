import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './songs.css'


export interface Song {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
}

const Songs = () => {
    const [songs, setSongs] = useState<Song[]>([]);


    const fetchSongs = async () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
            params: {
                key: '484129036',
                locale: 'en-US'
            },
            headers: {
                'X-RapidAPI-Key': '03efd5a285mshe7331c9d611b7f7p143fd2jsn5b7e913e6da3',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const songData = response.data.tracks.map((track: any) => ({
                id: track.key,
                title: track.title,
                artist: track.subtitle,
                imageUrl: track.images.coverarthq
            }));
            // console.log(songData)
            // console.log(songData)
            // console.log(response)
            setSongs(songData);
            // console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSongs();
    })


    return (
        <>
            <div >
                <h1 className='song-header'>Your favourite tunes</h1>

            </div>
            <div className='song-container'>



                <div className="song-list">
                    {songs.map((song) => (
                        <div key={song.id} className="card">
                            <img src={song.imageUrl} alt="Song Cover" />
                            <div>
                                <h2 className='title'>{song.title}</h2>
                                <p >{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div> </div>
        </>
    )
}

export default Songs