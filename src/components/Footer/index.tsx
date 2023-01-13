import React from 'react';

import 'animate.css';
import "./index.css";

export function Footer() {

	return (
		<footer className="footer-bs">
        <div className="row">
		<div className="col-md-3 footer-brand animated fadeInLeft">
		<img src="logo.pnj" alt=""/>
                 <p>2023 ©  BS3 UI Kit, All rights reserved</p>
            </div>
        <div className="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu</h4>
            <div className="col-md-6">
                <ul className="pages">
                <li><a href="#">About Us</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                    <li><a href="#">Privacy Policy </a></li>
                </ul>
            </div>
			</div>
            <div className="col-md-2 footer-social animated fadeInDown">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Github</a></li>
					</ul>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
                <h4>Newsssdvdsdvvvlettdver</h4>
                <p>A vsdvrvdvsdvver vdswesdring a sdvfuzzsdvy suidvt ddvoesn’t slarm thvvssde real pensdvuvdsins</p>
                <p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-envelope"></span>
                            </button>
                        </span>
                    </div>
                </p>
            </div>
        
		</div>
		</footer>
    );
}
