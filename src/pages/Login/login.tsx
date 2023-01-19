import React from "react";

import "./login.css"

export function Login() {

    return (
        <React.Fragment>
            <section className="wrapper">
                <div className="form signup">
                    <header>Sign up</header>
                    <form action="#">
                        <input type="text" placeholder="Full name" required />
                        <input type="text" placeholder="Email address" required />
                        <input type="password" placeholder="Password" required />
                        <div className="checkbox">
                            <input type="checkbox" id="signupCheck" />
                            <label htmlFor="signupCheck">I accept all terms & conditions</label>
                        </div>
                        <input type="submit" value="Sign up" />
                    </form>
                </div>

                <div className="form login">
                    <header>Login</header>
                    <form action="#">
                        <input type="text" placeholder="Email address" required />
                        <input type="password" placeholder="Password" required />
                        <a href="#">Forgot password?</a>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </section>

        </React.Fragment>

    );
};