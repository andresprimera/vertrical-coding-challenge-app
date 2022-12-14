import React, { useState, useRef, useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { StoreContext } from "context";

import { SearchField } from "components";

import HomeLayout from "components/Layout";

import SearchResults from "./SearchResults";

import styles from "./styles.module.css";
import { MoviesStateUI, StoreUI } from "context/movies/interfaces";

export default function HomeScreen() {
  const element = useRef(null);

  const { state } = useContext<StoreUI>(StoreContext);
  const { moviesState } = state;
  const { movies } = moviesState as MoviesStateUI;

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Vertrical Coding Challenge"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeLayout>
        <>
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.searchSection}
          >
            <h3>{"Search Bar"}</h3>
            <SearchField />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.innerContainer}
          >
            <h3 ref={element} className={styles.resultTitle}>
              {"Results"}
            </h3>

            <SearchResults movies={movies} />
          </motion.div>
        </>
      </HomeLayout>
    </div>
  );
}
