// @ts-check

import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';
import { fetchImages } from './api';

export function DogListContainer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  const [urls, setUrls] = useState(null);


  function reloadImages(breed){
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const list = data.message
        setBreeds(Object.keys(list))
      })
  }, []);

  return <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} onFormSubmit={reloadImages} urls={urls} />
}
export default DogListContainer


