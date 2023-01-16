import React, { useState } from 'react';
import axios from 'axios';
import { Stats } from 'fs';

interface JobApplication {
    name: string;
    email: string;
    resume: File;
    coverLetter: string;
  }
  
 
  

interface JobApplicationProps {
  match: {
    params: {
      jobId: number;
      resume: any ; 
    }
  }
}

const JobApplication: React.FC<JobApplicationProps> = ({ match }) => {
    const [formData, setFormData] = useState<JobApplication>({
        name: '',
        email: '',
        resume: new File([], ''),
        coverLetter: ''
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, resume: files[0] });
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', Stats.name);
    formData.append('email', formData.email);
    formData.append('resume', formData.resume);
    formData.append('coverLetter', formData.coverLetter);
    try {
        await axios.post(`https://api.jobadder.com/8799/jobs/${match.params.jobId}/apply`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Votre candidature a été soumise avec succès!');
      } catch (err) {
        console.log(err);
        alert('Une erreur s\'est produite lors de la soumission de votre candidature.');
      }
    };

    return (
    <div className="bg-gray-200 min-h-screen">
    <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-1/2 py-8">
    <h1 className="text-3xl font-medium text-center">Postuler</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Nom</label>
    <input
                   className="border p-2 w-full"
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                 />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Email</label>
    <input
                   className="border p-2 w-full"
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                 />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">CV</label>
    <input
                   className="border p-2 w-full"
                   type="file"
                   name="resume"
                   onChange={handleFileChange}
                   required
                 />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Lettre de motivation</label>
    <input 
                   className="border p-2 w-full"
                   name="coverLetter"
                   value={formData.coverLetter}
                   onChange={handleChange}
                   required
                 />
    </div>
    <button className="bg-blue-500 text-white p-2 rounded-sm" type="submit">Soumettre</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    );
    };
    
    export default JobApplication;
