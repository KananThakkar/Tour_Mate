import React from "react";
import { useParams } from "react-router-dom";
import articles from "../../data/articles";
import "./ArticleDetails.css";

function ArticleDetails(){

const { id } = useParams();

const article = articles.find(
(item)=> item.id === parseInt(id)
);

if(!article){
return <h2>Article Not Found</h2>;
}

return(

<div className="article-details">

<h1>{article.title}</h1>

{/* <img src={article.image} alt={article.title}/> */}

<p><b>Author:</b> {article.author}</p>

<p><b>Date:</b> {article.date}</p>

<p className="content">
{article.content}
</p>

</div>

);

}

export default ArticleDetails;