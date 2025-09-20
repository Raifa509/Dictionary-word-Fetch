import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function App() {

  const [word, setWord] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async () => {
    if (!word) return
    setError("")
    
    setLoading(true)
    setResult(null)


    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const data = await response.json()
      
      console.log(result);
      if (data.title && data.title === "No Definitions Found") {
        setError("Word not found. Try another one!");
        setResult(null);
      }
      else{
        setResult(data[0])
      }

    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false)
    }
  }

  const handleVoice = () => {
    if (result && result.phonetics && result.phonetics[1]?.audio) {
      const audio = new Audio(result.phonetics[1].audio)
      audio.play()
    } else {
      alert("No audio available for this word")
    }
  }


  return (
    <>
      <div className='min-h-screen flex justify-center items-center' id='main-div'>
        <div className='bg-stone-300 w-150 md:m-0 m-4 p-5  rounded-lg '>
          <div className='text-center rounded-lg shadow-2xl bg-stone-300 p-4'>
            <h2 className='md:text-3xl text-xl font-bold text-stone-700'>Word Glossary</h2>

            {/* input box */}
            <div className='mt-15'>
              <input onChange={(e) => setWord(e.target.value)} value={word} type="text" placeholder='Enter a word...' className='border border-stone-600 focus:outline  focus:outline-stone-700 rounded px-2 py-1 md:w-[75%] w-[65%]' />
              <button onClick={handleSearch} className='ms-4 bg-stone-600 text-white md:px-4 px-2 py-1 rounded cursor-pointer hover:bg-stone-700'><FontAwesomeIcon icon={faMagnifyingGlass} />Search</button>
            </div>


            {/* Loading Spinner */}
            {loading && (
              <div className="flex justify-center mt-10">
                <div className="w-8 h-8 border-4 border-stone-400 border-t-stone-700 rounded-full animate-spin "></div>
              </div>
            )}

            {/* Error Message */}
            {error && <p className="text-stone-600 text-lg my-10">{error}</p>}

            {
              result && (
                <>
                  {/* word display */}
                  <div className='shadow mt-10 m-3 text-left p-5 flex justify-between items-center'>
                    <div className='ms-4'>
                      <h3 className='text-2xl font-bold text-stone-700'>{result.word}</h3>
                      <h4 className='mt-3'>Pronunciation : <span>{result.
                        phonetics[1].text}</span></h4>
                    </div>
                    <FontAwesomeIcon onClick={handleVoice} icon={faVolumeHigh} className='text-2xl me-5 cursor-pointer text-stone-800' />
                  </div>

                  {/* definition cards */}
                  <div className="space-y-4 mt-6 m-3">
                    {/* single meaning card */}

                    {
                      result.meanings.map((meaning, index) => (
                        <div key={index} className=" rounded-lg shadow-md p-4 text-left">
                          <h4 className="text-lg font-semibold text-stone-700">Part of Speech: <span className="italic">{meaning.partOfSpeech}</span></h4>
                          <p className="mt-2 text-stone-800">
                            <span className="font-bold">Definition:</span> {meaning.definitions[0].definition
}
                          </p>
                          
                        </div>
                      ))
                    }

                  </div>

                </>
              )
            }



          </div>
        </div>
      </div>
    </>
  )
}

export default App
