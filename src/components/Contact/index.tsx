import './index.css';
import Contactt from './Contact';
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
						<div className="right">
						<Contactt nom='FirstName'/>
						<Contactt nom='LastName'/>
						<Contactt nom='Email'/>
						<input
							type="text"
							placeholder="Message"
							name="Message"
							className="input1"
						/>
						
						</div>
		
						<button type="submit" className="green_btn">
							ok
						</button>
					</form>
				</div>
			</div>
		</div>

};
