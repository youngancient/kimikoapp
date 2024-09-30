import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';

interface Medication {
  name: string;
  dosage: string;
  interval: string;
  duration: string; // in days
  startDate: string; // the start date of the medication
}

interface Patient {
  name: string;
  medications: Medication[];
}

const PatientProgress = () => {
  const [patients, setPatients] = useState<Patient[]>([
    {
      name: 'John Doe',
      medications: [
        {
          name: 'Cancer Medication',
          dosage: '50mg',
          interval: '12 hours',
          duration: '7', // 7 days
          startDate: '2024-09-25', // Assuming it started on this date
        },
      ],
    },
  ]);

  // Helper function to calculate if the medication is completed
  const isMedicationCompleted = (startDate: string, duration: string) => {
    const start = new Date(startDate);
    const durationInDays = parseInt(duration);
    const endDate = new Date(start);
    endDate.setDate(start.getDate() + durationInDays);
    
    const today = new Date();
    return today > endDate;
  };

  return (
    <>
     <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-52 flex flex-col bg-gray-50">
        <Header />
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6">Patient Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-6">
        {patients.map((patient, patientIndex) => (
          <div key={patientIndex} className="bg-white p-5 shadow-inner  shadow-zinc-800 mb-7 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">{patient.name}</h3>
            <div className="space-y-4">
              {patient.medications.map((medication, medIndex) => {
                const isCompleted = isMedicationCompleted(
                  medication.startDate,
                  medication.duration
                );
                return (
                  <div
                    key={medIndex}
                    className={`p-4 rounded-lg shadow-md ${
                      isCompleted ? 'bg-green-100' : 'bg-blue-100'
                    }`}
                  >
                    <h4 className="text-md font-medium mb-2">
                      {medication.name} - {medication.dosage}
                    </h4>
                    <p className="text-sm">
                      Interval: {medication.interval}
                    </p>
                    <p className="text-sm">
                      Duration: {medication.duration} days
                    </p>
                    <p className="text-sm">
                      Start Date: {new Date(medication.startDate).toLocaleDateString()}
                    </p>
                    <p className={`text-sm font-semibold mt-2 ${isCompleted ? 'text-green-600' : 'text-blue-600'}`}>
                      {isCompleted ? 'Status: Completed' : 'Status: Ongoing'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default PatientProgress;