import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { BiX } from "react-icons/bi";
import { toast } from 'react-toastify';


interface Dose {
  time: string;       
  missed: boolean;    
}

interface Medication {
  name: string;
  dosage: string;
  interval: string;
  duration: string; 
}

interface Patient {
  name: string;
  address: string;
  medications: Medication[];
}

const DashboardPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]); 
  const [currentPatient, setCurrentPatient] = useState<Patient>({ name: '', address: "", medications: [] });
  const [medication, setMedication] = useState<Medication>({ name: '', dosage: '', duration: '', interval: '' });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 

  const modalRef = useRef<HTMLDivElement>(null);

  // Handle input change for patient
  const handlePatientChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    setCurrentPatient({ ...currentPatient, [name]: value });
  };

  // Handle input change for medication
  const handleMedicationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  // Add medication to current patient's medications list
  const addMedication = (): void => {
    if (!medication.name || !medication.dosage || !medication.duration || !medication.interval) {
      toast.error('Please fill in all the fields before adding the medication.');
      return;
    }
    setCurrentPatient({
      ...currentPatient,
      medications: [...currentPatient.medications, medication],
    });
    // Clear medication input
    setMedication({ name: '', dosage: '', duration: '' , interval: ''});
  };

  // Save the patient with their medications
  const savePatient = (): void => {
    if ( !currentPatient.name || !currentPatient.address ) {
      toast.error('Please fill in all the fields before adding the medication.');
      return;
    }
    setPatients([...patients, currentPatient]);
    toast.success('Patient Successfully added');
    setCurrentPatient({ name: '', address: "", medications: [] });
    setIsModalOpen(false);
  };

  // Toggle Modal
  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const editPatient = (index: number) => {
    // Implement edit logic
    console.log(`Editing patient at index ${index}`);
  };

  // Close modal if click is outside the modal content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-52 flex flex-col bg-gray-50">
        <Header />
    <div className="w-11/12 shadow-lg bg-white rounded-2xl mb-3  mx-auto mt-10 p-5">

      {/* Button to trigger modal */}
      <div className='flex w-full justify-between'>
      <h1 className="text-xl font-bold">Doctor's Dashboard</h1>

      <button
        onClick={toggleModal}
        className="bg-blue-700 hover:bg-blue-800 text-white p-20 py-2 px-6 rounded-lg shadow-md"
      >
        Add Patient
      </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Patient</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 transition-all"
              >
               <BiX size={25}/>
              </button>
            </div>

            {/* Form for adding a new patient */}
            <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
                <label className="block mb-2 text-sm">Patient Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentPatient.name}
                  onChange={handlePatientChange}
                  className="w-full text-sm px-4 py-2 border bg-slate-200 rounded-lg"
                  placeholder="Enter patient's name"
                />
              </div>
                  <div>
                    <label className="block mb-2 text-sm">Patient Address: </label>
                    <input
                      type="text"
                      name="address"
                      value={currentPatient.address}
                      onChange={handlePatientChange}
                      className="w-full text-sm px-4 py-2 border bg-slate-200 rounded-lg"
                      placeholder="e.g., 0x455584fa3ecd9s"
                    />
                  </div>
                  </div>
              

              {/* Form for adding medications */}
              <div className="space-y-4">
                <h3 className="text-md font-semibold mb-2">Add Medications</h3>


                <div>
                    <label className="block mb-2 text-sm">Medication Name: </label>
                    <input
                      type="text"
                      name="name"
                      value={medication.name}
                      onChange={handleMedicationChange}
                      className="w-full text-sm px-4 py-2 border bg-slate-200 rounded-lg"
                      placeholder="e.g., Cancer Medication"
                    />
                  </div>
                 
                  


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div>
                    <label className="block mb-2 text-sm">Dosage:</label>
                    <input
                      type="text"
                      name="dosage"
                      value={medication.dosage}
                      onChange={handleMedicationChange}
                      className="w-full text-sm px-4 py-2 border bg-slate-200 rounded-lg"
                      placeholder="e.g., 50mg"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Duration (in days):</label>
                    <input
                      type="number"
                      name="duration"
                      value={medication.duration}
                      onChange={handleMedicationChange}
                      className="w-full text-sm px-4 py-2 border bg-slate-200 rounded-lg transition-all"
                      placeholder="e.g., 30"
                    />
                  </div>
                  <div className='w-full'>
                    <label className="block mb-2 text-sm">Interval:</label>
                    <select
                        name="interval"
                        onChange={handleMedicationChange}
                        value={medication.interval}
                        className="w-full text-sm px-4 py-2 outline-none bg-slate-200 rounded-lg transition-all"
                      >
                        <option value="" disabled selected hidden>
                          Select interval
                        </option>
                        <option className="text-sm" value="6 hours">
                          6 hours
                        </option>
                        <option className="text-sm" value="8 hours">
                          8 hours
                        </option>
                        <option className="text-sm" value="10 hours">
                          10 hours
                        </option>
                        <option className="text-sm" value="12 hours">
                          12 hours
                        </option>
                      </select>
                  </div>
                </div>

                {/* Button to add medication */}
                <button
                  onClick={addMedication}
                  className="mt-4 bg-blue-700 text-sm hover:bg-blue-800 text-white py-2 px-3 rounded-lg"
                >
                  Add Medication
                </button>
              </div>

              {/* Display added medications */}
              <div className="mt-6">
                <h3 className="text-md font-semibold">Added Medications</h3>
                {currentPatient.medications.length > 0 ? (
                  <ul className="list-disc shadow-sm bg-slate-300 rounded-sm p-2 pl-3 space-y-2">
                    {currentPatient.medications.map((med, index) => (
                      <li key={index}>
                        {med.name} - {med.dosage} at {med.interval} for {med.duration} days
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500">No medications added yet.</p>
                )}
              </div>
            </div>

            {/* Save and Close Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={savePatient}
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-all"
              >
                Save Patient
              </button>
              <button
                onClick={toggleModal}
                className="bg-trueGray-300 hover:bg-trueGray-400 text-gray-800 py-2 px-4 rounded-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Patient History Table (outside the modal) */}
      <div className="mt-10">
      <h2 className="text-lg font-medium mb-6">Patient and Medication Table</h2>
        {patients.length > 0 ? (
           <div className="w-full">
          
           <div className="overflow-x-auto">
             <table className="min-w-full bg-white">
               <thead className="bg-blue-700 text-white">
                 <tr>
                   <th className="text-left py-2 px-3 font-semibold uppercase">Patient</th>
                   <th className="text-left py-2 px-3 font-semibold uppercase">Medications</th>
                   <th className="text-left py-2 px-3 font-semibold uppercase ">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray">
                 {patients.map((patient, index) => (
                   <tr key={index} className="hover:bg-gray-100 transition-colors">
                     <td className="py-4 px-2 "> 
                       <span className="font-semibold text-gray-900">{patient.name}</span>
                     </td>
                     <td className="py-4 px-2">
                       <ul className="list-disc grid grid-cols-2 space-y-2">
                         {patient.medications.map((medication, medIndex) => (
                           <li key={medIndex} className="text-gray-700">
                             <span className="font-medium">{medication.name}</span> - {medication.dosage}, 
                             {medication.duration} days
                             <br />
                             <span className="text-gray-500 text-sm">Doses: {medication.interval}</span>
                           </li>
                         ))}
                       </ul>
                     </td>
                     <td className="py-4 px-6">
                       <button
                         onClick={() => editPatient(index)}
                         className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                       >
                         Edit
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No patients added yet.</p>
        )}
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default DashboardPage;
