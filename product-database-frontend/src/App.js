// routers
import { Routes, Route } from "react-router-dom";

// import pages
import HeroPage from "./pages/HeroPage";
import ProductsTablePage from "./pages/ProductsTablePage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

function App() {
	return (
		<div>
			{/* define app routes */}
			<Routes>
				<Route path="/" element={<HeroPage />} />
				<Route
					path="/ProductsTablePage"
					element={<ProductsTablePage />}
				/>
				<Route path="*" element={<PageNotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
