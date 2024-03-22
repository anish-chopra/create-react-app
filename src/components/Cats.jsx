import React, { useEffect, useState } from 'react'

export default function Cats() {

  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    async function getData(){
      const response=  await fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1283ee93ecfd790ed6acd3dd8a84b445&tags=cats&per_page=24&format=json&nojsoncallback=1");
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPhotos(data.photos.photo);
    }

    getData();
  }, [])  
  return (
    <div>
      <h1>Cats</h1>
      {photos.map((item)=>{
        return(
          <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}/>
        )
      })}
    </div>
  )
}
