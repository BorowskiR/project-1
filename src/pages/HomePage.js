import React from "react";
import Article from '../components/Article'

const articles = [
  {
    id: 1,
    title: "Lorem ipsum",
    author: "Jan Nowak",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro adipisci eius accusamus animilibero? Nihil doloremque adipisci fugit sapiente odit aliquam, facilis sed iste unde dolore totam quos quaerat!"
  },
  {
    id: 2,
    title: "Lorem ipsum",
    author: "Jan Nowak",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro adipisci eius accusamus animilibero? Nihil doloremque adipisci fugit sapiente odit aliquam, facilis sed iste unde dolore totam quos quaerat!"
  },
  {
    id: 3,
    title: "lorem ipsum?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro adipisci eius accusamus animilibero? Nihil doloremque adipisci fugit sapiente odit aliquam, facilis sed iste unde dolore totam quos quaerat!"
  }
];
const HomePage = () => {
const artList = articles.map(article => (
    <Article key={article.id} {...article}/>
))
  return (
      <div className="home">
          {artList}
      </div>
  )
};

export default HomePage;
