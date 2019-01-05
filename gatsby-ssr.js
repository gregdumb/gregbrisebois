/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { renderToString } from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './src/getPageContext';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
	// Get the context of the page to collected side effects.
	const pageContext = getPageContext();

	const bodyHTML = renderToString(
		<JssProvider registry={pageContext.sheetsRegistry} >{bodyComponent}</JssProvider>,
	);

	replaceBodyHTMLString(bodyHTML);
	setHeadComponents([
		<style
			type="text/css"
			id="jss-server-side"
			key="jss-server-side"
			dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
		/>,
	]);
};