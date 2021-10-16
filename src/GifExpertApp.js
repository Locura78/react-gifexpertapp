import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['Futbol 11', 'Fubol 5', 'Futbol Sala'];
    // const [categorias, setCategorias] = useState(['Fútbol 11', 'Fútbol 5', 'Fútbol Sala']);
    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategorias([...categorias, 'Fútbol playa']);
    //     // OTRA FORMA
    //     setCategorias( cats => [...cats, 'Fútbol playa']);
    // }
    return (
        <>
            <h1 className='animate__animated animate__backInUp'>Gif Expert App</h1>
            <AddCategory setCategorias= { setCategorias } />
            <hr></hr>
            {/* <button onClick = { handleAdd }>Agregar Categoría</button> */}
            <ol>
                { 
                    categorias.map( categoria => 
                        // return <li key = { categoria } > { categoria }</li>
                        <GifGrid 
                            key = { categoria }
                            categoria = { categoria } />
                    )
                }
            </ol>
        </>
    );
};