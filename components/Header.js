import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
	return (
		<header>
			<div className="bar">
				<Link href="/">Sick Fit</Link>
				<Nav></Nav>
			</div>
			<div className="sub-bar">
				<input type="search"></input>
			</div>
		</header>
	);
}
