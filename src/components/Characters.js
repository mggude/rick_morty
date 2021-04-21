import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../App.css';

const characterImages = gql`
    query getCharacters {
        characters {
            results {
                image
                name
            }
        }
    } 
`;

function Characters() {
    // getCharacterImages(){}
    const { loading, error, data } = useQuery(characterImages);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.characters.results.map(({ image, name }) => (
        <div className='characterWrapper' key={image}>
            <img className='character' alt={name} src={image}></img>
        </div>
    ));
}

export default Characters;