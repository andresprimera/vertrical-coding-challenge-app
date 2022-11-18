import React, { useEffect, useState, useContext } from "react";
import CloseIcon from "public/svgs/CloseIcon";

import { StoreContext } from "context";

import { handlePerformSearch } from "context/data/handlers";

import { Button } from "./Button";

import styles from "./styles.module.css";

interface props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchField = ({ text, setText }: props) => {
  const [showDeleteButton, setShowDeleteButton] = useState(true);
  const { dataDispatch } = useContext<any>(StoreContext);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePerformSearch(dataDispatch);
    }
  };

  useEffect(() => {
    setShowDeleteButton(text !== "");
  }, [text]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
      {showDeleteButton ? (
        <CloseIcon onClick={() => setText("")} style={{ marginRight: 10 }} />
      ) : null}
      <Button onPress={() => handlePerformSearch(dataDispatch)} />
    </div>
  );
};
