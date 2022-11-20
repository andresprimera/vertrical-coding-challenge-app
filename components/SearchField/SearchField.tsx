import React, { useEffect, useState, useContext, useCallback } from "react";
import CloseIcon from "assets/svgs/CloseIcon";

import { StoreContext } from "context";

import {
  handlePerformSearch,
  handleClearFields,
} from "context/movies/handlers";

import { Button } from "./Button";

import styles from "./styles.module.css";
import { DispatchUI, StoreUI } from "context/movies/interfaces";

export const SearchField = () => {
  const [text, setText] = useState("");
  const [showDeleteButton, setShowDeleteButton] = useState(true);
  const { moviesDispatch } = useContext<StoreUI>(StoreContext);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          handlePerformSearch({
            dispatch: moviesDispatch as React.Dispatch<DispatchUI>,
            query: text,
          });
          break;

        case "Backspace":
          handleClearFields(moviesDispatch as React.Dispatch<DispatchUI>);
          break;
      }
    },
    [moviesDispatch, text]
  );

  const clearfields = useCallback(() => {
    handleClearFields(moviesDispatch as React.Dispatch<DispatchUI>);
    setText("");
  }, [moviesDispatch]);

  useEffect(() => {
    setShowDeleteButton(text !== "");
  }, [text]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        className={styles.input}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
      {showDeleteButton ? (
        <CloseIcon onClick={() => clearfields()} style={{ marginRight: 10 }} />
      ) : null}
      <Button
        onPress={() =>
          handlePerformSearch({
            dispatch: moviesDispatch as React.Dispatch<DispatchUI>,
            query: text,
          })
        }
      />
    </div>
  );
};
