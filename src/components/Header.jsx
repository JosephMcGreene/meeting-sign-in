import logo from "../img/big-a.png";

export default function Header() {
	return (
		<header className="header">
			<img src={logo} alt="Advizot logo" className="logo" />
			<h1 className="h1">Welcome!</h1>
		</header>
	);
}
