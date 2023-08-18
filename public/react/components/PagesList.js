import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, fetchArticle}) => {
	return (
		<> 
		{
			pages.map((page, idx) => {
				return (
					<Page page={page} key={idx} fetchArticle={fetchArticle} />
				)
			})
		}
	</>
	)
} 
