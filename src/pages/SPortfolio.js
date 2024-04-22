import React, { useState, useEffect  } from 'react'
import Navbar from '../Components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { storage } from  '../firebaseconfig';
import { db } from '../firebaseconfig';
import { collection, addDoc, getDocs, query, where, doc, setDoc, onSnapshot } from 'firebase/firestore';


const Modal = ({ isOpen, onClose }) => {

    
    const [serviceName, setServiceName] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [activationPrice, setActivationPrice] = useState('');
    const [renewalPrice, setRenewalPrice] = useState('');
    const [status, setStatus] = useState('');
    const [renewable, setRenewable] = useState();
    console.log(renewable)
    const overlayClasses = isOpen ? 'fixed inset-0 bg-black opacity-50' : 'hidden';
    const modalClasses = isOpen
        ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md w-11/12 md:w-3/4 lg:w-1/2 xl:w-3/4'
        : 'hidden';

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("pressed")
        try {
            // Convert status to lower case
            const serviceStatus = status.toLowerCase();

            // Convert isRenewalRequired to boolean
            // const isRenewalRequired = renewable === 'true';
            const isRenewalRequired = renewable !== undefined ? renewable : null;

            // Check if collection "Services" exists, if not, create it
            const servicesQuery = query(collection(db, 'Services'));
            const servicesSnapshot = await getDocs(servicesQuery);
            if (servicesSnapshot.empty) {
                await setDoc(doc(db, 'Services', 'initial'), {});
            }
        // Add data to Firestore
        await addDoc(collection(db, 'Services'), {
            serviceName,
            serviceId,
            status: serviceStatus,
            activationPrice: parseFloat(activationPrice),
            renewable: isRenewalRequired,
            renewalPrice: parseFloat(renewalPrice),
            transactionId,

        });
         // Clear form fields after submission
         setServiceName('');
         setServiceId('');
         setTransactionId('');
         setActivationPrice('');
         setRenewalPrice('');
         setStatus('');
         setRenewable();

         // Optionally, you can show a success message or redirect the user
         console.log('Service added successfully!');
     } catch (error) {
         console.error('Error adding service: ', error);
         console.log("EEROR")
     }

    };

    return (
        <div>
            <div
                className={overlayClasses}
                onClick={onClose}
            ></div>

            <div className={modalClasses}>
                <div className="text-center p-7">
                        <h2 className="text-2xl font-bold mb-4">Create a New Service</h2>
                        <div className="max-w-3xl mx-auto mt-4">
                            <div className="bg-white rounded-md shadow-md p-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="mb-2">
                                            <label htmlFor="serviceName" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
                                            <input
                                                type="text"
                                                placeholder='Enter the service name'
                                                id="serviceName"
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                                name="serviceName"
                                                value={serviceName}
                                                onChange={(e) => setServiceName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <label htmlFor="serviceid" className="block text-gray-700 text-sm font-bold mb-2">Service ID</label>
                                            <input
                                                id="serviceid"
                                                placeholder='Enter your serviceID'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                                name="serviceId"
                                                value={serviceId}
                                                onChange={(e)=>setServiceId(e.target.value)}
                                                required
                                            ></input>
                                        </div>

                                        <div className="mb-2">
                                            <label htmlFor="TransactionId" className="block text-gray-700 text-sm font-bold mb-2">Transaction Id</label>
                                            <input
                                                type="text"
                                                id="transactionId"
                                                placeholder='Enter the Transaction Id'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                                name="transactionId"
                                                value={transactionId}
                                                onChange={(e)=>setTransactionId(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-2">
                                            
                                            <label htmlFor="actprice" className="block text-gray-700 text-sm font-bold mb-2">Activation Price</label>
                                            <input
                                                type="text"
                                                id="actprice"
                                                placeholder='Enter your Activation Price'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                                value={activationPrice}
                                                onChange={(e)=>setActivationPrice(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <label htmlFor="isRenewalRequired" className="block text-gray-700 text-sm font-bold mb-2">is Renewal Required</label>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-purple-500"
                                                        value="true"
                                                        checked={renewable}
                                                        onChange={() => setRenewable(true)}
                                                    />
                                                    <span className="ml-2">Yes</span>
                                                </label>
                                                <label className="inline-flex items-center ml-6">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-purple-500"
                                                        value="false"
                                                        checked={!renewable}
                                                        onChange={() => setRenewable(false)}
                                                    />
                                                    <span className="ml-2">No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="RenewalPrice" className="block text-gray-700 text-sm font-bold mb-2">Renewal Price</label>
                                            <input
                                                type="number"
                                                id="RenewalPrice"
                                                placeholder='Enter the Renewal Price'
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                                value={renewalPrice}
                                                onChange={(e)=>setRenewalPrice(e.target.value)}
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-2">
                                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-purple-500"
                                                        value="Online"
                                                        checked={status === 'online'}
                                                        onChange={() => setStatus('online')}
                                                    />
                                                    <span className="ml-2">Online</span>
                                                </label>
                                                <label className="inline-flex items-center ml-6">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-purple-500"
                                                        value="Offline"
                                                        checked={status === 'offline'}
                                                        onChange={() => setStatus('offline')}
                                                    />
                                                    <span className="ml-2">Ofline</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-center">
                                <button
                                
                                    type="submit"
                                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple"
                                >
                                    Add Service
                                </button>
                            </div>
                                </form>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

const SPortfolio = () => {
    const [servicesData, setServicesData] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // Create a reference to the "Services" collection
        const servicesCollection = collection(db, 'Services');
            
        // Subscribe to real-time updates using onSnapshot
        const unsubscribe = onSnapshot(servicesCollection, (snapshot) => {
            const updatedServices = [];
            snapshot.forEach((doc) => {
                updatedServices.push(doc.data());
            });
            setServicesData(updatedServices);
            console.log(updatedServices)
        });

        
        // Unsubscribe from real-time updates when the component unmounts
        return () => unsubscribe();
        
    }, [])
   
    return (
        <div>
            <Navbar />


            <Modal isOpen={isModalOpen} onClose={closeModal} />

            <div className="flex flex-col items-center mt-10">
                <div className="flex justify-between  m-4">
                    <div className="mr-10">
                        <input
                            type="text"
                            placeholder="Search Services 🔍"
                            className="py-2 pl-8 pr-4 block w-full  rounded-md border border-purple-300 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md" onClick={openModal}>
                        Create a Service
                    </button>
                </div>
               <div className="p-3 overflow-x-auto">
            <table className="table-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Sr. No</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Service Name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Service ID</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Status</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Activation Price</div>
                        </th> 
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Renewal Req?</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Renewal Price</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left text-purple-500">Transaction Id</div>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                    {servicesData.map((service, index) => (
                        <tr key={index} className='hover:bg-purple-200 ' >
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{index + 1}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.serviceName}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.serviceId}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.status}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.activationPrice}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.renewable ? "true" : "false"}</div>
                            </td>
                            
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.renewalPrice}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{service.transactionId}</div>
                            </td>
                            {/* <td className="p-2 whitespace-nowrap">
                                {service.available ? (
                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Available
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                        Unavailable
                                    </span>
                                )}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            </div>
        </div>
    )
}

export default SPortfolio