import React from "react";
import  Contact  from "../../components/Contact";
import Clients from "../clients"; 
import Candidates from "../candidates";
import { SubmitCV } from "../SubmitCV/SubmitCV";
import background1 from './skills.jpg';
import background2 from './recuitment.jpg';

import "./index.css"

export function Home() {
	
	return (
		<React.Fragment>
			
			<div  className="imag" style={{backgroundImage: `url(${background1})`}}>
				
			<p className="title">vous souhaitez la bienvenue sur notre site web </p>
			<h2>importance des softs skills</h2>
			<p className="txt"> Les softs skills représentent à la fois l’intelligence relationnelle,
				les capacités de communication, le caractère (sociable ou timide…), 
				les aptitudes interpersonnelles (le savoir-être).<br/>
				Ils se différencient des hard skills qui représentent les compétences techniques (le savoir-faire).<br/> 
				Ils sont complémentaires et ont tous les deux leur importance dans le recrutement. <br/>
				Il est donc nécessaire de ne pas faire reposer l’offre d’emploi sur un seul d’entre eux, mais de les regrouper pour avoir un profil plus complet et plus performant.<br/>
				En effet, pour réaliser les missions établies, un candidat aura, certes, besoin d’un savoir-faire acquis grâce à ses expériences passées,
				mais aussi d’un savoir-être pour la partie plus relationnelle et interactive de son travail (esprit d’équipe, discrétion, organisation, etc.). 
			</p>
			
			</div>
			<div id="myDIV">
			<h2>salaire</h2>
			<p>concernant le salaire il est proportionnel selon le profil des employées</p>
			<h2>intitulé du poste</h2>
			<p>chez notre societé nous cherchons des developpeurs  dans differents specialites 
				<ul>
				 <li> developpement full stack js  </li>
				 <li>developpement frontend react</li>
				 <li>developpement backend nodejs</li>
				</ul>
			</p>
		</div>	
			<div  className="immag" style={{backgroundImage: `url(${background2})`}}>
			<div className="txtt">
			<h2>experience acquise pour ce poste </h2>
			<p>notre societe ne s'interresse pas par l'experience ,l'essentiel c'est que le developpeurs maitrise bien 
				le react, le nodejs et surtout le typescript </p>
				<h2>type de contrat proposes et sa duree</h2>
				<p>contrat pour un an a renouveler chaque annee selon discipline et la responsabilite et surtt l'effort d'employee </p>
				</div>
				</div>
		</React.Fragment>
		
	);
};
