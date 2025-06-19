"use client";
import React, { useEffect, useState } from "react";

const icons = {
  location: (
    <svg className="w-5 h-5 inline-block mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.866 0-7 2.239-7 5v2a1 1 0 001 1h12a1 1 0 001-1v-2c0-2.761-3.134-5-7-5z"/></svg>
  ),
  contract: (
    <svg className="w-5 h-5 inline-block mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z"/></svg>
  ),
  insurance: (
    <svg className="w-5 h-5 inline-block mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7"/></svg>
  ),
  benefits: (
    <svg className="w-5 h-5 inline-block mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
  ),
};

interface JobPost {
  id: number;
  code: string;
  text: string;
  position: string;
  contractDuration: string;
  field: string;
  workLocation: string;
  workingHours: string;
  daysOff: string;
  insurance: string;
  otherBenefits?: string;
  jobDescription: string;
  qualifications: string;
  howToApply: string;
}

const CareersPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);

  useEffect(() => {
    fetch("/api/admin/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#ed253c] mb-8 text-center">Careers</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center text-gray-500">No job vacancies at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border hover:shadow-lg transition-shadow">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-2xl font-bold text-[#ed253c]">
                      {job.position[0]}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-800">{job.position}</div>
                      <div className="text-sm text-gray-500">{job.field}</div>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="space-y-2 text-sm">
                    <div>{icons.location} {job.workLocation}</div>
                    <div>{icons.contract} {job.contractDuration}</div>
                    <div>{icons.insurance} {job.insurance}</div>
                    {job.otherBenefits && job.otherBenefits.trim() !== "" && (
                      <div>{icons.benefits} {job.otherBenefits}</div>
                    )}
                  </div>
                </div>
                <button
                  className="mt-6 bg-[#ed253c] text-white px-4 py-2 rounded font-semibold hover:bg-[#c41e32] transition-colors"
                  onClick={() => setSelectedJob(job)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Modal for job details */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-2xl border max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh] flex flex-col">
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold"
                onClick={() => setSelectedJob(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mr-5 text-3xl font-bold text-[#ed253c]">
                  {selectedJob.position[0]}
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800 mb-1">{selectedJob.position}</div>
                  <div className="text-base text-gray-500">{selectedJob.field}</div>
                </div>
              </div>
              <div className="space-y-2 mb-6 text-base">
                <div>{icons.location} <span className="font-semibold">Location:</span> {selectedJob.workLocation}</div>
                <div>{icons.contract} <span className="font-semibold">Contract:</span> {selectedJob.contractDuration}</div>
                <div>{icons.insurance} <span className="font-semibold">Medical/life & Social insurance:</span> {selectedJob.insurance}</div>
                {selectedJob.otherBenefits && selectedJob.otherBenefits.trim() !== "" && (
                  <div>{icons.benefits} <span className="font-semibold">Other Benefits:</span> {selectedJob.otherBenefits}</div>
                )}
                <div><span className="font-semibold">Working Hours:</span> {selectedJob.workingHours}</div>
                <div><span className="font-semibold">Days Off:</span> {selectedJob.daysOff}</div>
              </div>
              <div className="mb-5">
                <div className="font-bold text-lg mb-2 text-[#ed253c]">Job Description:</div>
                <ul className="list-disc pl-6 text-gray-700 text-base space-y-1 whitespace-pre-line">
                  {selectedJob.jobDescription.split(/\r?\n|\|/).map((line, idx) => line.trim() && <li key={idx}>{line.trim()}</li>)}
                </ul>
              </div>
              <div className="mb-5">
                <div className="font-bold text-lg mb-2 text-[#ed253c]">Qualifications:</div>
                <ul className="list-disc pl-6 text-gray-700 text-base space-y-1 whitespace-pre-line">
                  {selectedJob.qualifications.split(/\r?\n|\|/).map((line, idx) => line.trim() && <li key={idx}>{line.trim()}</li>)}
                </ul>
              </div>
              <div className="mb-2">
                <div className="font-bold text-lg mb-2 text-[#ed253c]">How to Apply:</div>
                <div className="whitespace-pre-line text-gray-700 text-base">{selectedJob.howToApply}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
