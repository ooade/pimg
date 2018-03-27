import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const style = `
.pimg {
	height: 500px;
	border: 1px solid red;
}
.pimg__placeholder {
	border: 1px solid #ddd;
	filter: blur(1vw);
}
.pimg__wrapper {
	display: inline-block !important;
	position: relative;
}
.pimg__btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
