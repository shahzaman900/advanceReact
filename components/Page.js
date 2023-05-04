import Header from "./Header";

export default function Page({ children, cool }) {
	return (
		<div>
			<Header></Header>
			{children}
		</div>
	);
}
