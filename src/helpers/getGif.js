
export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=9&api_key=aYO9iwL4gQBTh3Pr7LoXOt3OydUNA437`;
    // console.log(url);
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}