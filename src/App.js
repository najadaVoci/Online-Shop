import React from "react";
import "./style.scss";
import logo from "./logo.svg";
import "./App.css";
import FakeData from "./helpers/generate_data";
import Card from "./components/card/card";
import Loader from "./components/loader/loader";

function App() {
  const [data, setData] = React.useState([]); // ruajme te gjithe te dhenat fillestare
  const [inputValue, setInputValue] = React.useState(""); // current input value
  const [filteredData, setFilteredData] = React.useState(""); // te dhenat e filtruara
  const [mode, setMode] = React.useState(false);

  const [isLoading, setLoading] = React.useState(true);

  const clickHandler = () => {
    console.log({ inputValue });
    const filtered = data.filter((el) => {
      if (el.productName.includes(inputValue)) {
        return el;
      }
    });
    console.log("=>", filtered);
    //update state
    setMode(true);
    setFilteredData(filtered);
  };

  const dataToRender = mode === true ? filteredData : data;

  React.useEffect(() => {
    FakeData()
      .then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const clearInput = () => {
    setInputValue("");
    setMode(false);
  };

  return (
    <div className="App">
      {isLoading ? <Loader /> : null}
      <div className="container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                clickHandler();
              }
            }}
            onChange={(e) => {
              setInputValue(e.target.value);

              if (e.target.value === "") {
                console.log(e.target.value);
                setMode(false);
              }
            }}
          />
          <div onClick={clickHandler} className="search-icon">
            <img
              src="https://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png"
              loading="lazy"
            />
          </div>
          {inputValue.length ? (
            <div onClick={clearInput} className="clear-seaarch">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBVx4cFg0Nm7RCAkOZpqMkQDb_TaUTiaM4ikagpsq4w&s"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
        <div className="total-result">
          <p>Total results: {dataToRender.length}</p>
        </div>
        <div className="cards-container">
          {dataToRender.length ? (
            dataToRender.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.productName}
                  price={el.price}
                  imageSrc={el.image}
                />
              );
            })
          ) : (
            <p>no results</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
