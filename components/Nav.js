import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<Link href="/products">Product</Link>
			<Link href="/sell">Sell</Link>
			<Link href="/account">Account</Link>
			<Link href="/orders">Orders</Link>
		</nav>
	);
}
