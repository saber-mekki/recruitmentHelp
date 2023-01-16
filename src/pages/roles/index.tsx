import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('');
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-3xl font-medium text-center">Offres d'emploi</h1>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="px-4 py-2">Poste</th>
                  <th className="px-4 py-2">Salary</th>
                  <th className="px-4 py-2">Poste</th>
                  <th className="px-4 py-2">Entreprise</th>
                  <th className="px-4 py-2">Localisation</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job : any) => (
                  <tr key={job.id} className="text-gray-700">
                    <td className="border px-4 py-2">{job.title}</td>
                    <td className="border px-4 py-2">{job.company}</td>
                    <td className="border px-4 py-2">{job.location}</td>
                    <Link to={`/job/${job.id}`} className="bg-blue-500 text-white p-2 rounded-sm">View Job</Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
