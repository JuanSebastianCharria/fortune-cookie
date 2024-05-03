import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {

    const changePhrase = () => {
        const indexRandom = getRandomNumber(quotes.length)
        setPhraseSelected(quotes[indexRandom])
        setBgSelected(photos[getRandomNumber(photos.length)])
    }


  return (
    <button className="ml-auto block cursor-pointer bg-violet-950 py-2 px-4 text-white rounded-md text-sm hover:brightness-200 shadow-md animate-bounce" onClick={changePhrase}>Dame más fortuna</button>
  )
}

export default BtnPhrase