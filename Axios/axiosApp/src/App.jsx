import { useState } from "react";
import "./App.css";
import axios from "axios";
import { parseISO, format, differenceInHours } from "date-fns";

function App() {
  const [quote, setQuote] = useState(
    "Please enter a scripture verse you'd like to see :) Format = Book Chapter : verse start - verse end"
  );
  const [input, setInput] = useState("");
  const [parsedData, setParsedData] = useState({});

  const getQuote = async () => {
    // const TOKEN = process.env.REACT_APP_BIBLE_TOKEN;
    // await axios.get('https://api.esv.org/v3/passage/text/', {
    //   params: {'q': input},
    //   headers: {
    //     Authorization: 'Token ' + TOKEN,
    //   }
    // })
    //   .then(response => {
    //     setQuote(response.data.passages[0]);
    //     console.log(response.data.passages[0]);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    const CIK = "0001375365";
    await axios
      .get(`https://data.sec.gov/submissions/CIK${CIK}.json`)
      .then((response) => {
        console.log(response);
        const data = {
          name: response.name,
          ticker: response.tickers,
          cik: response.cik,
          filingDate: response.filings.recent.filingDate,
          formType: response.filings.recent.form,
        };

        // Given timestamp in ISO format
        const givenDate = data[filingDate];

        // Parse the ISO date string to a Date object
        const givenDateObj = parseISO(givenDate);

        // Get the current date and time
        const now = new Date();

        // Compare the dates
        const hoursDifference = differenceInMinutes(now, givenDateObj);

        console.log(`Difference in mins: ${hoursDifference}`);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="App">
        <button onClick={getQuote}>Get Quote</button>
        <br />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{quote}</p>
      </div>
    </>
  );
}

export default App;
