import React, { useEffect, useState } from "react";
import CloseIcon from "public/svgs/CloseIcon";

import { Button } from "./Button";

import styles from "./styles.module.css";

interface props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handlePerformSearch: () => void;
}
const performSearch = () => {
  console.log("perform search");
};

export const SearchField = ({ text, setText, handlePerformSearch }: props) => {
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePerformSearch();
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
      <Button onPress={() => handlePerformSearch()} />
    </div>
  );
};
