import React from 'react';

export const Page = (props) => {

  function handleClick(event){
    event.preventDefault();
    props.fetchArticle(props.page.slug);
  }

  return (
    <>
      <h3>
        <a href="#" onClick={handleClick}>{props.page.title}</a>
      </h3>
    </>
  )
} 
	