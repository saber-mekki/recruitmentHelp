import React from "react";
import "./team.css";
import emp1 from './emp1.png';
import emp2 from './emp2.png';
import emp3 from './emp3.jpg';

export function Team() {
    return (
        <React.Fragment>
            {/* <h1> OUR TEAM </h1>
            <div className="box">
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="container">
                        <div className="midle">
                            <p> zadg</p><br />
                            <p> developpeur</p>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="container">
                        <div className="midle">
                            <p> opô</p><br />
                            <p>developpeur</p>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-bars"></i>
                    <div className="container">
                        <div className="midle">
                            <p> duuh</p><br />
                            <p> developpeur</p>
                        </div>

                    </div>
                </div>
                
              
              
            </div>*/}
            <h2 >Our Team</h2>
            <div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={emp1} alt="emp1" className="emp1" />
                        <div className="container">
                            <h2>x</h2>
                            <p className="title">developpeur</p>
                            <p>paflk</p>
                            <p>x@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={emp2} alt="emp2" className="emp2" />
                        <div className="container">
                            <h2>p</h2>
                            <p className="title">Art Director</p>
                            <p>fl$r</p>
                            <p>p@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={emp3} alt="emp3" className="emp3" />
                        <div className="container">
                            <h2>n</h2>
                            <p className="title">Designer</p>
                            <p>pqzlfe</p>
                            <p>h@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div></div>
        </React.Fragment>
    );
}