import React from "react";
import { UseCounter } from "../../hooks/UseCounter";
import { Usefetch } from "../../hooks/Usefetch";
import "../UseEffect/styles.css";

export const MultipleCustomHook = () => {
  const { Counter, increment } = UseCounter(1);

  const { loading, data } = Usefetch(
    ` https://www.breakingbadapi.com/api/quotes/${Counter} `
  );

  const { author, quote } =
    !!data &&
    data[0]; /* aqui decimos que si la data no es falsa, extraiga la data de la psoscion 0 */

  console.log(loading);
  return (
    <>
      <div> Breaking bad </div>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center"> loading... </div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}

      <button
        className="
    btn btn-primary"
        onClick={increment}
      >
        siguiente frase
      </button>
    </>
  );
};
