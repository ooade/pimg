import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const style = `
.block {
	margin: 20px;
	background-color: #ddd;
}
.pimg {
	height: 300px;
}
.pimg__placeholder {
	height: 300px;
	border: 1px solid #ddd;
	filter: blur(5px);
}
.pimg__wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center
}
.pimg__btn {
	position:absolute;
	height: 40px;
	border: 2px solid #fff;
	border-radius: 20px;
	font-size: 14px;
	padding: 0px 8px 2px;
	cursor: pointer;
	background: #333;
	color: #fdfdfd;
}
`

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<style>{style}</style>
					<title>My Page</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
