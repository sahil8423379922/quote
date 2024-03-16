import React, { useEffect, useState } from "react";
import QuoteCard from "./Quote";
import style from "./CSS/Quote.module.css";
import axios from "axios";

export default function App() {
  const [color, setcolor] = useState("#0f0f0f");
  const [quote, setQuote] = useState(
    "Genius is one percent inspiration and ninety-nine percent perspiration."
  );
  const [author, setAuthor] = useState("Thomas Edison");
  const [quoteArray, setQuoteArray] = useState([]);

  const bgColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
  };

  const handelClick = () => {
    const randomindex = Math.floor(Math.random() * quoteArray.length);
    // console.log(quoteArray[randomindex].author);
    setQuote(quoteArray[randomindex].text);
    setAuthor(quoteArray[randomindex].author);
  };

  useEffect(() => {
    setTimeout(() => {
      const color = bgColor();
      setcolor(color);
    }, 5000);
  });

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      setQuoteArray(res.data);
    });
    //console.log("Array received =" + quoteArray.length);
  }, []);

  return (
    <>
      <div
        className={style.root}
        style={{ backgroundColor: color, transition: "background-color 2s" }}
      >
        <QuoteCard q={quote} a={author} h={handelClick} />
      </div>
    </>
  );
}
