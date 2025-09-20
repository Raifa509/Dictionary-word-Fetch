import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';


function App() {


  return (
    <>
      <div className='min-h-screen flex justify-center items-center' id='main-div'>
        <div className='bg-stone-300 w-150 md:m-0 m-4 p-5  rounded-lg '>
          <div className='text-center rounded-lg shadow-2xl bg-stone-300 p-4'>
            <h2 className='md:text-3xl text-xl font-bold text-stone-700'>Word Glossary</h2>
            <div className='mt-15'>
              <input type="text" placeholder='Enter a word...' className='border border-stone-600 focus:outline  focus:outline-stone-700 rounded px-2 py-1 md:w-[75%] w-[65%]' />
              <button className='ms-4 bg-stone-600 text-white md:px-4 px-2 py-1 rounded cursor-pointer hover:bg-stone-700'><FontAwesomeIcon icon={faMagnifyingGlass} />Search</button>
            </div>
            {/* word display */}
            <div className='shadow mt-10 m-3 text-left p-5 flex justify-between items-center'>
              <div className='ms-4'>
                <h3 className='text-2xl font-bold text-stone-700'>Harmony</h3>
                <h4 className='mt-3'>Pronunciation : <span>/sjkdk/</span></h4>
              </div>
              <FontAwesomeIcon icon={faVolumeHigh} className='text-2xl me-5 cursor-pointer text-stone-800' />
            </div>

            {/* definition cards */}
            <div className="space-y-4 mt-6 m-3">
              {/* single meaning card */}
              <div className=" rounded-lg shadow-md p-4 text-left">
                <h4 className="text-lg font-semibold text-stone-700">Part of Speech: <span className="italic">noun</span></h4>
                <p className="mt-2 text-stone-800">
                  <span className="font-bold">Definition:</span> A pleasing arrangement of parts.
                </p>
                <p className="mt-1 text-stone-600 italic">
                  Example: The choir sang in perfect harmony.
                </p>
              </div>

              <div className=" rounded-lg shadow-md p-4 text-left">
                <h4 className="text-lg font-semibold text-stone-700">Part of Speech: <span className="italic">verb</span></h4>
                <p className="mt-2 text-stone-800">
                  <span className="font-bold">Definition:</span> To be in agreement or concord.
                </p>
                <p className="mt-1 text-stone-600 italic">
                  Example: Their opinions harmonize perfectly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
