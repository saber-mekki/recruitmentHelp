import React from "react";
import {Outlet} from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";

import "./index.css";

export default function Layout(): JSX.Element {
	return (
		<div className="body__clz">
			<div className="header__clz">
				<Header />
			</div>
			<div className="home__clz">
				<React.Suspense fallback="Loading...">
					<Outlet />
				</React.Suspense>
			</div>
			<div className="footer__clz">
				<Footer />
			</div>
		</div>
	);
}
