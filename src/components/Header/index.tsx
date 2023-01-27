import React from "react";
import logo from './aures.png';

import "./index.css";
export function Header() {
    return (
			<div className="header-container__clz">
				<img src={logo} alt="logo" className="img" />
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
							<div className="full"></div>
						</div>
					</div>
				</div>
				<h5 className="text-header-container__clz">AURES Recrutment</h5>

				<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
					<nav className="navigation navbar navbar-expand-md navbar-dark ">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarsExample04"
							aria-controls="navbarsExample04"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarsExample04">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="index">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="about">
										About Us
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="product">
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="roles">
										roles
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="candidates">
									Candidates
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="entretiens">
									Entretiens
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact">
										Contact Us
									</a>
								</li>
								<li className="nav-item d_none">
									<a className="nav-link" href="search">
										<i className="fa fa-search" aria-hidden="true"></i>
									</a>
								</li>
								
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
}
export default Header ;
