import React from "react";
import styles from "./Newsfeed.module.css";
import { NewsfeedItem } from "./NewsfeedItem/NewsfeedItem";
import { useSelector } from "react-redux";

const Newsfeed = () => {
  return (
    <div className={styles.newsfeed}>
      <div className={styles.newfeed}>
        <h1>Daily news</h1>
      </div>
      <div className={styles.newsWrapper}>
        <NewsfeedItem />
        <NewsfeedItem />
        <NewsfeedItem />
      </div>
    </div>
  );
};

export { Newsfeed };
