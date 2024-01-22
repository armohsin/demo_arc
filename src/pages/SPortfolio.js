import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Modal = ({ isOpen, onClose }) => {

    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceCategory, setServiceCategory] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [availability, setAvailability] = useState('available');

    const overlayClasses = isOpen ? 'fixed inset-0 bg-black opacity-50' : 'hidden';
    const modalClasses = isOpen
        ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3'
        : 'hidden';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission, e.g., send data to server or perform necessary actions
        console.log({
            serviceName,
            serviceDescription,
            serviceCategory,
            servicePrice,
            availability,
        });

        // Reset form fields if needed
        setServiceName('');
        setServiceDescription('');
        setServiceCategory('');
        setServicePrice('');
        setAvailability('available');
    };

    return (
        <div>
            <div
                className={overlayClasses}
                onClick={onClose}
            ></div>

            <div className={modalClasses}>
                <div className="text-center p-10"  >
                    <h2 className="text-2xl font-bold mb-4">Create a New Service</h2>
                    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                             
                                <input
                                    type="text"
                                    placeholder='Enter the service name'
                                    id="serviceName"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                    value={serviceName}
                                    onChange={(e) => setServiceName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                
                                <textarea
                                    id="serviceDescription"
                                    placeholder='Enter your service description'
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                    value={serviceDescription}
                                    onChange={(e) => setServiceDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-4">
                              
                                <input
                                    type="text"
                                    id="serviceCategory"
                                    placeholder='Enter your service category'
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                    value={serviceCategory}
                                    onChange={(e) => setServiceCategory(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                               
                                <input
                                    type="number"
                                    id="servicePrice"
                                    placeholder='Enter the price of your service'
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
                                    value={servicePrice}
                                    onChange={(e) => setServicePrice(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Availability</label>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-purple-500"
                                            value="available"
                                            checked={availability === 'available'}
                                            onChange={() => setAvailability('available')}
                                        />
                                        <span className="ml-2">Available</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input
                                            type="radio"
                                            className="form-radio text-purple-500"
                                            value="unavailable"
                                            checked={availability === 'unavailable'}
                                            onChange={() => setAvailability('unavailable')}
                                        />
                                        <span className="ml-2">Unavailable</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6">
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
    );
};

const SPortfolio = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const servicesData = [
        {
            serviceId: "SVC001",
            serviceName: "Website Development",
            serviceDesc: "Custom websites for your business",
            serviceCategory: "Web Application",
            servicePrice: 1500,
            available: true
        },
        {
            serviceId: "SVC002",
            serviceName: "Mobile App Development",
            serviceDesc: "iOS and Android app development",
            serviceCategory: "Mobile Application",
            servicePrice: 2500,
            available: false
        },
        {
            serviceId: "SVC003",
            serviceName: "Database Design",
            serviceDesc: "Optimized database solutions",
            serviceCategory: "Database",
            servicePrice: 1200,
            available: true
        },
        {
            serviceId: "SVC004",
            serviceName: "API Development",
            serviceDesc: "Create and integrate APIs",
            serviceCategory: "API Development",
            servicePrice: 800,
            available: true
        },
        {
            serviceId: "SVC005",
            serviceName: "E-commerce Website",
            serviceDesc: "Online store development",
            serviceCategory: "Web Application",
            servicePrice: 2000,
            available: true
        },
        {
            serviceId: "SVC006",
            serviceName: "Cloud Hosting Setup",
            serviceDesc: "Deploy and configure cloud hosting",
            serviceCategory: "Infrastructure",
            servicePrice: 500,
            available: false
        },
    ];

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
                                    <div className="font-semibold text-left text-purple-500">Description</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left text-purple-500">Category</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left text-purple-500">Price (PKR)</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Availability</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {servicesData.map((service, index) => (
                                <tr key={service.serviceId} className='hover:bg-purple-200 ' >
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{index + 1}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{service.serviceName}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{service.serviceDesc}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{service.serviceCategory}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{service.servicePrice}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        {service.available ? (
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Available
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                                Unavailable
                                            </span>
                                        )}
                                    </td>
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