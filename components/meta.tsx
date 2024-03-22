
import Head from 'next/head';
import React from 'react';

const MetaHead = () => (
	<Head>
		{/* Open Graph Protocol */}
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="Vladislav Portfolio" />
		<meta property="og:title" content="NextJS with mongo" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="url" />
		<meta property="og:description" content="Passionate web developer with expertise in React, Next.js, TypeScript, Node.js, MongoDB, and Material-UI. Explore my projects and experience in web development." />
		{/* image */}
		<meta property="og:image" content="https://example.com/ogp.jpg" />
		<meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
		<meta property="og:image:type" content="image/jpeg" />
		<meta property="og:image:width" content="400" />
		<meta property="og:image:height" content="300" />
		<meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
		{/* video */}
		<meta property="og:video" content="https://example.com/movie.swf" />
		<meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
		<meta property="og:video:type" content="application/x-shockwave-flash" />
		<meta property="og:video:width" content="400" />
		<meta property="og:video:height" content="300" />

		{/* Twitter Protocol */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@digitalocean" />
		<meta name="twitter:title" content="NextJS with mongo" />
		<meta name="twitter:description" content="Passionate web developer with expertise in React, Next.js, TypeScript, Node.js, MongoDB, and Material-UI. Explore my projects and experience in web development." />
		<meta name="twitter:image" content="https://html.sammy-codes.com/images/large-profile.jpg" />
		<meta property="fb:app_id" content="your_app_id" />

		<title>Frontend NextJS</title>
		<meta name="description" content="Passionate web developer with expertise in React, Next.js, TypeScript, Node.js, MongoDB, and Material-UI. Explore my projects and experience in web development." />
		<meta charSet="utf-8" />
		<meta name="robots" content="index, follow" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta name="author" content="Vladislav Rogoza" />
		<meta name="language" content="english" />
		<meta name="copyright" content="Copyright 2024" />
		<meta name="format-detection" content="telephone=yes" />
		<meta name="HandheldFriendly" content="true" />

		{/* set icon */}
		<link rel="stylesheet" href="/favicon.css" />
	</Head>
);

export default MetaHead;