import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGif';

export const useFetchGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( categoria )
            .then( imgs => {
                // setTimeout(()=>{
                    
                // },3000);
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [ categoria ]);

    return state; //  { data: [], loading: true };
}
