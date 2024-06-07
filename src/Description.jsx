// @ts-check
import { useState } from "react";
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/hound-english/n02089973_1260.jpg");
  const changeDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => setDogUrl(json.message))
  }
  return (
    <>
      <p className='app-desc'>犬の画像を表示するサイトです。</p>
      <div className='app-img'>
        <DogImage imageUrl={dogUrl} />
        <button onClick={changeDogImage}>更新</button>
      </div>
    </>
  )
}

export default Description
