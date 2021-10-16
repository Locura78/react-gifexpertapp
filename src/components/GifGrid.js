import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGif';

export const GifGrid = ( {categoria}) => {

    // const [images, setImages] = useState([]);
    // useEffect( () => {
    //     getGifs( categoria )
    //         .then( setImages );
    // }, [ categoria ]);
    const { data: imagenes, loading } = useFetchGifs( categoria );
        
    // getGifs();

    return (
        <>
            <h3>{ categoria }</h3>     
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                {
                    imagenes.map( img => (
                        // <li key={ img.id }>{ img.title }</li>
                        <GifGridItem 
                            key = { img.id }
                            // imagen = { img }
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
