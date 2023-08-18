import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [article, setArticle] = useState(null);

	async function fetchArticle(slug){
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const articleData = await response.json();
			setArticle(articleData);
		} catch (err) {
			console.log("Could not fetch article! ", err)
		}
	}

	useEffect(() => {
		async function fetchPages(){
			try {
				const response = await fetch(`${apiURL}/wiki`);
				const pagesData = await response.json();
				setPages(pagesData);
			} catch (err) {
				console.log("Oh no an error! ", err)
			}
		}

		fetchPages();
	}, []);

	if(article) {
		return (
			<main>
				<a 
					href="#" 
					onClick={(event) => {
						event.preventDefault();
						setArticle(null)
					}}>Back to Wiki List
				</a>
				<h1>{article.title}</h1>
				<p>Author: {article.author.name}</p>
      			<p>Published: {article.createdAt}</p>
      			<p>{article.content}</p>
      			<p>Tags: {article.tags}</p>
			</main>
		)
	} else {
		return (
			<main>	
		  <h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} fetchArticle={fetchArticle}/>
			</main>
		)
	}
}