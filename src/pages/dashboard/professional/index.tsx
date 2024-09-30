import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { BiX } from "react-icons/bi";
import { isAddress } from 'viem';
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
  const [isPatientModalOpen, setIsPatientModalOpen] = useState<boolean>(false);
  const [isMedicationModalOpen, setIsMedicationModalOpen] = useState<boolean>(false);
  const [activePatientIndex, setActivePatientIndex] = useState<number | null>(null); // Track the patient being edited

  const patientModalRef = useRef<HTMLDivElement>(null);
  const medicationModalRef = useRef<HTMLDivElement>(null);

  // Handle input change for patient
  const handlePatientChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === 'address' && !isAddress(value)) {
      toast.error('Please enter a valid Ethereum address.');
      return;
    }
    setCurrentPatient({ ...currentPatient, [name]: value });
  };

  // Handle input change for medication
  const handleMedicationChange = (e: any)=> {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  // Add medication to current patient's medications list
  const addMedication = (): void => {
    if (!medication.name || !medication.dosage || !medication.duration || !medication.interval) {
      toast.error('Please fill in all the fields before adding the medication.');
      return;
    }

    if (activePatientIndex !== null) {
      const updatedPatients = [...patients];
      updatedPatients[activePatientIndex].medications.push(medication);
      setPatients(updatedPatients);
      setMedication({ name: '', dosage: '', duration: '', interval: '' });
      setIsMedicationModalOpen(false);
      toast.success('Medication added successfully');
    }
  };

  // Save the patient with their medications
  const savePatient = (): void => {
    if (!currentPatient.name || !currentPatient.address) {
      toast.error('Please fill in all the fields before saving the patient.');
      return;
    }
    setPatients([...patients, currentPatient]);
    toast.success('Patient Successfully added');
    setCurrentPatient({ name: '', address: "", medications: [] });
    setIsPatientModalOpen(false);
  };

  // Toggle Patient Modal
  const togglePatientModal = (): void => {
    setIsPatientModalOpen(!isPatientModalOpen);
  };

  // Toggle Medication Modal
  const toggleMedicationModal = (index: number): void => {
    setActivePatientIndex(index); // Set the active patient index
    setIsMedicationModalOpen(!isMedicationModalOpen);
  };

  const editPatient = (index: number) => {
  };

  // Close patient modal if click is outside the modal content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (patientModalRef.current && !patientModalRef.current.contains(event.target as Node)) {
        setIsPatientModalOpen(false);
      }
      if (medicationModalRef.current && !medicationModalRef.current.contains(event.target as Node)) {
        setIsMedicationModalOpen(false);
      }
    };

    if (isPatientModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPatientModalOpen]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-52 flex flex-col bg-gray-50">
          <Header />
          <div className="w-11/12 shadow-lg dark:text-black bg-white rounded-2xl mb-3  mx-auto mt-10 p-5">

            {/* Button to trigger patient modal */}
            <div className='flex w-full justify-between'>
              <h1 className="text-xl font-bold">Doctor's Dashboard</h1>

              <div className='space-x-4'>
                <button
                  onClick={togglePatientModal}
                  className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg shadow-md"
                >
                  Add Patient
                </button>
              </div>
            </div>

            {/* Patient Modal */}
            {isPatientModalOpen && (
              <div className="fixed inset-0 dark:text-black bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div ref={patientModalRef} className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Add Patient</h2>
                    <button
                      onClick={togglePatientModal}
                      className="text-gray-500 hover:text-gray-700 transition-all"
                    >
                      <BiX size={25} />
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
                          className="w-full text-sm px-4 outline-none py-2 border bg-slate-200 rounded-lg"
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
                          className="w-full text-sm px-4 outline-none py-2 border bg-slate-200 rounded-lg"
                          placeholder="e.g., 0x455584fa3ecd9s"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save Patient Button */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={savePatient}
                      className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition-all"
                    >
                      Save Patient
                    </button>
                    <button
                      onClick={togglePatientModal}
                      className="ml-4 bg-gray-300 text-sm hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Medication Modal */}
            {isMedicationModalOpen && (
              <div className="fixed inset-0 dark:text-black bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div ref={medicationModalRef} className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Add Medication</h2>
                    <button
                      onClick={toggleMedicationModal.bind(null, activePatientIndex as number)}
                      className="text-gray-500 hover:text-gray-700 transition-all"
                    >
                      <BiX size={25} />
                    </button>
                  </div>

                  {/* Form for adding a medication */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 dark:text-black md:grid-cols-3 gap-4">
                      <div>
                        <label className="block mb-2 text-sm">Medication Name: </label>
                        <input
                          type="text"
                          name="name"
                          value={medication.name}
                          onChange={handleMedicationChange}
                          className="w-full text-sm dark:text-black outline-none px-4 py-2 border bg-slate-200 rounded-lg"
                          placeholder="e.g., Cancer Medication"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm">Dosage: </label>
                        <input
                          type="text"
                          name="dosage"
                          value={medication.dosage}
                          onChange={handleMedicationChange}
                          className="w-full text-sm outline-none dark:text-black px-4 py-2 border bg-slate-200 rounded-lg"
                          placeholder="e.g., 2mg"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm">Duration:</label>
                        <input
                          type="text"
                          name="duration"
                          value={medication.duration}
                          onChange={handleMedicationChange}
                          className="w-full text-sm outline-none dark:text-black px-4 py-2 border bg-slate-200 rounded-lg"
                          placeholder="e.g., 2 weeks"
                        />
                      </div>
                      <div>
                      <label className="block mb-2 text-sm">Interval:</label>
                        <select name="interval"
                            onChange={handleMedicationChange}
                            value={medication.interval}
                            className="w-full text-sm px-4 py-2 outline-none bg-slate-200 rounded-lg"
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
                            <option className="text-sm" value="12 hours">
                              12 hours
                            </option>
                            <option className="text-sm" value="24 hours">
                              24 hours
                            </option>
                          </select>
                      </div>
                    </div>
                  </div>

                  {/* Add Medication Button */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={addMedication}
                      className="bg-blue-500 text-sm hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition-all"
                    >
                      Add Medication
                    </button>
                    <button
                      onClick={toggleMedicationModal.bind(null, activePatientIndex as number)}
                      className="ml-4 bg-gray-300 text-sm hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Patient Table */}
            <div className="mt-6 overflow-x-auto">
              {patients.length > 0 ? (
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className='text-sm'>
                      <th className="py-2 px-4 border-x">Patient Name</th>
                      <th className="py-2 px-4 border">Patient Address</th>
                      <th className="py-2 px-4 border">Medications</th>
                      <th className="py-2 px-4 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 font-medium border">{patient.name}</td>
                        <td className="py-2 px-4 text-sm border">{patient.address}</td>
                        <td className="py-2 px-4 border">
                          <table className="min-w-full bg-gray-100 border">
                            <thead>
                              <tr className='text-sm'>
                                <th className="py-1 px-2 border">Medication Name</th>
                                <th className="py-1 px-2 border">Dosage</th>
                                <th className="py-1 px-2 border">Duration</th>
                                <th className="py-1 px-2 border">Interval</th>
                              </tr>
                            </thead>
                            <tbody>
                              {patient.medications.map((med, medIndex) => (
                                <tr key={medIndex}>
                                  <td className="py-1 px-2 border">{med.name}</td>
                                  <td className="py-1 px-2 border">{med.dosage}</td>
                                  <td className="py-1 px-2 border">{med.duration}</td>
                                  <td className="py-1 px-2 border">{med.interval}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                        <td className="py-2 px-4 border">
                          <div className='flex '>

                          <button
                            onClick={() => toggleMedicationModal(index)}
                            className="bg-blue-500 font-semibold hover:bg-blue-400 text-sm text-white py-1 px-2 rounded-lg transition-all"
                          >
                            Add Medication
                          </button>
                          <button
                            onClick={() => editPatient(index)}
                            className="ml-2 bg-gray-300 font-semibold hover:bg-gray-400 text-sm text-gray-600 hover:text-white py-1 px-2 rounded-lg transition-all"
                          >
                            Progress
                          </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className='text-center text-gray-500'>No patients added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;