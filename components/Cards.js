import React from "react";
import { formatPrice } from "./FormatPrice";
import styles from "../style/Cards.module.css";

export function Cards({ results, searchValue }) {
  let searchedComics = [];

  if (!searchValue.length >= 1) {
    searchedComics = results;
  } else {
    searchedComics = results.filter((comic) => {
      const comicText = comic.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return comicText.includes(searchText);
    });
  }

  return (
    <main className={styles.main}>
      <ul className={styles.grid}>
        {searchedComics.map((result) => {
          const { id, title, thumbnail, creators, prices } = result;
          const cover = thumbnail.path + "." + thumbnail.extension;
          const price = formatPrice(prices[0].price);
          const creator = creators.items;

          const isWriter = creator.find((writer) => {
            return writer.role === "writer";
          });
    
          let nameWriter = [];
          let voidWriter = [];
          if (isWriter) {
            nameWriter.push(isWriter.name);
          } else {
            voidWriter.push("Jon Doe");
          }

          return (
            <li key={id} className={styles.card}>
              <div className={styles.containerimg}>
                <img
                  src={cover}
                  alt={title}
                  className={styles.coverimage}
                ></img>
              </div>
              <h2>{title}</h2>

              <p>
                {nameWriter}
                {voidWriter}
              </p>

              <button>{price}</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
