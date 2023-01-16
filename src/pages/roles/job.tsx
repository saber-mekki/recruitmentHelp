import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

interface JobProps {
  match: {
    params: {
      jobId: number;
    }
  }
}

const JobView: React.FC<JobProps> = ({ match }) => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`https://api.jobadder.com/8799/jobs/${match.params.jobId}`);
      setJob(res.data);
    };
    fetchJob();
  }, [match.params.jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-3xl font-medium text-center">{job.title}</h1>
            <p>{job.company} - {job.location}</p>
            <h2 className="text-2xl font-medium">Description</h2>
            <p>{job.description}</p>
            <h2 className="text-2xl font-medium">Responsibilities</h2>
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-medium">Requirements</h2>
<ul>
{job.requirements.map((requirement, index) => (
<li key={index}>{requirement}</li>
))}
</ul>
<div className="my-4">
<button className="bg-blue-500 text-white p-2 rounded-sm">Postuler</button>
</div>
</div>
</div>
</div>
</div>
);
};

export default JobView;
