import React, {useState, useEffect} from 'react';
import styles from "./Quote.module.scss";

const Quote = () => {

    const[randomQuote, setRandomQuote] = useState([]);

    const[showNewQuote, setShowNewQuote] = useState(false); 

    const[onInput, setOnInput] = useState(""); 

    const[isDisabled, setDisabled] = useState(false); 

    const getKanyeQuote = () => {
        fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(json => setRandomQuote(json.quote))
        .catch(err => console.log(err))
    };

    const printNewQuote = (event) => {
        event.preventDefault(); 
        setShowNewQuote(!showNewQuote);
        setDisabled(!isDisabled)
    }
    
    useEffect(() => {
        getKanyeQuote();
    }, []);

    useEffect(() => {
        }, [showNewQuote]);


    return (
        <div>
            <h1 className={styles.quote}>"{randomQuote}" - Kanye West</h1>
            <button onClick={() => setRandomQuote(getKanyeQuote)}>Change Quote</button>
            <form action="">
                <p>Your own quote:</p>
                <input  onInput={(event) => setOnInput(event.target.value)} type="text" name="newQuote" id="newQuote" placeholder="Please enter your own quote" disabled = {isDisabled}/>
                <button onClick={(event) => printNewQuote(event)}  type="submit" disabled = {isDisabled}>Submit</button>
                <p>{showNewQuote ? `Quote you entered: "${onInput}"` : ""}</p>
            </form>
        </div> 
    )
};

export default Quote;