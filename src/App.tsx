import { Outlet } from "react-router-dom";

function App() {
	return (
		<main className="w-screen h-screen bg-app-color-base-background">
			<img srcSet="/cover.png" className="mb-[-64px] z-0" />
			<Outlet />
		</main>
	);
}

export default App;
