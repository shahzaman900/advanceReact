export default function Page({ children, cool }) {
	return (
		<div>
			<h2>I am tha page component</h2>
			<h3>{cool}</h3>
			{children}
		</div>
	);
}
