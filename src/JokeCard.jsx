import { useEffect, useState } from "react"

export default function() {

    const [joke, setJoke] = useState();
    const [isBtnAnswer, setIsBtnAnswer] = useState(true);
    const [reload, setReload] = useState();

    useEffect(() => {
        if(reload !== undefined){
            fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
                .then(response => response.json())
                .then(obj => setJoke(obj))
                .catch(err => console.warn(err));
        }
        }, [reload])

    useEffect(() => setReload(true), []);
        
    return (<div id="jokeCard">

        {   
            !joke ? <div>Loading...</div> 
          :
            <>
                <p>{joke.setup}</p>
                {
                    isBtnAnswer ?
                        <button
                            onClick={() => {
                                setIsBtnAnswer(false)
                            }}
                        >Answer</button>
                      :
                        <>
                        <button
                            onClick={() => {
                                setIsBtnAnswer(true);
                                setReload(!reload)
                            }}
                        >Reload</button>
                        <p>{joke.delivery}</p>
                        </>
                }
            </>
        }
    
    </div>)
}