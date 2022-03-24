import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HtmlReactParser from "html-react-parser";
import Backdrop from "../ui/Backdrop";
import "./SearchBar.css";

const SearchBar = (props) => {
  const { products, initialInputText, className } = props;

  const [inputText, setInputText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputTextIsFocus, setInputTextIsFocus] = useState(false);
  const [textTyped, setTextTyped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialInputText && !inputText.length && !textTyped) {
      setInputText(initialInputText);
      setTextTyped(true);
    }
    if (products) {
      setFilteredProducts(
        products.filter((p) => {
          return p.name.toLowerCase().includes(inputText.toLowerCase());
        })
      );
    }
  }, [products, inputText, initialInputText, textTyped]);

  const changeInputHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    navigate("products", {
      state: { text: inputText },
    });
    setInputTextIsFocus(false);
  };

  const focusInputTextHandler = () => {
    setInputTextIsFocus(true);
  };

  const searchProductHandler = (product) => {
    navigate("products/" + (product.id > 0 ? product.id : ""), {
      state: { id: product.id },
    });
    setInputTextIsFocus(false);
  };

  const getProducts = () => {
    return (
      filteredProducts &&
      filteredProducts.map((element, index) => {
        /** This replace function use a Regex to highlight matching word. */
        const htmlElement = element.name.replace(
          new RegExp(inputText, "gi"),
          (match) => "<b>" + match + "</b>"
        );
        return (
          <React.Fragment key={index}>
            <div
              className="search-bar__result"
              onClick={() => searchProductHandler(element)}
            >
              <div className="search-bar__result-type">
                {element.type.toUpperCase()}
              </div>
              <div className="search-bar__result-name">
                {HtmlReactParser(htmlElement)}
              </div>
            </div>
            {((index + 1 < filteredProducts.length &&
              filteredProducts[index].type !==
                filteredProducts[index + 1].type) ||
              filteredProducts.length === index + 1) && (
              <hr className="search-bar__results__line-separator" />
            )}
          </React.Fragment>
        );
      })
    );
  };

  return (
    <div className={"search-bar " + className}>
      {inputTextIsFocus && (
        <Backdrop
          style={{ background: "none" }}
          onClick={() => {
            setInputTextIsFocus(false);
          }}
        />
      )}
      <form className="search-bar__input-form" onSubmit={submitSearchHandler}>
        <input
          type="text"
          className="search-bar__input"
          placeholder="What are you looking for?"
          value={inputText}
          onChange={changeInputHandler}
          onClick={focusInputTextHandler}
        />
        <span className="search-bar__search-button">
          <FontAwesomeIcon
            icon={faSearch}
            className="search-bar__search-icon"
          />
        </span>
      </form>
      <CSSTransition
        in={inputTextIsFocus}
        timeout={1000}
        classNames="results"
        mountOnEnter
        unmountOnExit
      >
        <div className="search-bar__results">{getProducts()}</div>
      </CSSTransition>
    </div>
  );
};

export default SearchBar;
