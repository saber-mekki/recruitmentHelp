import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Candidates() {
    const [candidates, setCandidates] = useState([]);

  useEffect(() => {
        //Récupération des données des candidats à partir d'une API
       axios.get('un ficher json')
           .then(res => setCandidates(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="bg-white p-6">
            <h1 className="text-2xl font-medium">Candidats</h1>
            <div className="overflow-x-auto">
                <table className="w-full text-left table-collapse">
                    <thead>
                        <tr>
                            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Nom</th>
                            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Email</th>
                            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Téléphone</th>
                            <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">CV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate : any)  => (
                            <tr key={candidate.id}>
                                <td className="p-2 border-t border-gray-200">{candidate.name}</td>
                                <td className="p-2 border-t border-gray-200">{candidate.email}</td>
                                <td className="p-2 border-t border-gray-200">{candidate.phone}</td>
                                <td className="p-2 border-t border-gray-200">
                                    <a href={candidate.cv}>Télécharger</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Candidates;
