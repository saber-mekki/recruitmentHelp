import './index.css';

export default function  Contact(){
	return <div className="contact_container">
			 <div className="contact_form_container">
				<div className="left">
					<h1>Welcome</h1>
						<button type="button" className="white_btn">
						contact us
						</button>
		
				</div>
				<div className="right">
					<form className="form_container"  >
						<h1>contact</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="input"
						/>
						<input
							type="texte"
							placeholder="message"
							name="message"
							className="input1"
						/>
		
						<button type="submit" className="green_btn">
							ok
						</button>
					</form>
				</div>
			</div>
		</div>

};
