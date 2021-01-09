import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => {
  return (
    <img
      alt="book1"
      src="https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg"
    ></img>
  );
};

const Title = () => <h1>Title</h1>;
const Author = () => <h4>Author</h4>;
ReactDom.render(<Booklist />, document.getElementById("root"));
