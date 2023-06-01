import React,{useState,useEffect} from 'react';
import "./revise.css";

const Revise = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [jokes, setJokes] = useState({})

  async function getJokes() {
    setIsLoading(true);
    const response = await fetch(url);
    const jokeData = response.json();
    setJokes(jokeData);
    setIsLoading(false);

  }
   useEffect(()=>{
       setTimeout(()=>{
         getJokes();
       },3000)
   },[])

  return (
    <div className='revise'>
          <div className="jokes-cont">
               <h2>Random Jokes Generator</h2>
                  <hr />
                    {isLoading ? (<h3>
                       Loading......
                    </h3>):(
                       <p>{jokes.value}</p>
                    )}
                  <hr />
                  <button className="butt" onClick={getJokes}>Generate Joke</button>
          </div>
    </div>
  )
}

export default Revise;