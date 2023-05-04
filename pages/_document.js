import Document, { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default class MyDocuments extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
