import React, { useState } from 'react'
import Navbar from '../Components/Navbar'


const servicesData = [
    {
        CustomerId: "JZGIL0198",
        CustomerName: "Ali Wazir",
        CNIC: "3501-6842979-7",
        CustomerLoc: "FSD",
        CustomerCell: "0321974920",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        CustomerId: "JZISL8762",
        CustomerName: "Sana Shafique",
        CNIC: "3501-6842979-7",
        CustomerLoc: "QUT",
        CustomerCell: "0362574920",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        CustomerId: "JZBWP4173",
        CustomerName: "Liaqut",
        CNIC: "3501-6842979-7",
        CustomerLoc: "KHI",
        CustomerCell: "0328594920",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

    },
    {
        CustomerId: "JZABT4173",
        CustomerName: "Riaz",
        CNIC: "3501-7412979-7",
        CustomerLoc: "ABT",
        CustomerCell: "0328594920",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

    },
    {
        CustomerId: "JZISL4592",
        CustomerName: "Nazim saleem",
        CNIC: "3501-6842979-7",
        CustomerLoc: "LHR",
        CustomerCell: "0321912720",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
    {
        CustomerId: "JZKPK2093",
        CustomerName: "Satir Aslam",
        CNIC: "3501-6842979-7",
        CustomerLoc: "BWP",
        CustomerCell: "0321749620",
        CustomerPic: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },

];

const SubProfile = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const results = servicesData.filter(service =>
            service.CustomerId.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };
    return (
        <div>
            <Navbar />


            <div className="flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md ">
                    <input
                        type="text"
                        placeholder="Search Customer ID"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border rounded w-full py-2 px-3 mb-4"
                    />
                    {searchTerm && (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="p-2 text-purple-600">Sr. No</th>
                                    <th className="p-2 text-purple-600">Avatar</th>
                                    <th className="p-2 text-purple-600">Customer Name</th>
                                    <th className="p-2 text-purple-600">Customer ID</th>
                                    <th className="p-2 text-purple-600">CNIC</th>
                                    <th className="p-2 text-purple-600">Location</th>
                                    <th className="p-2 text-purple-600">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((customer, index) => (
                                    <tr key={customer.CustomerId} className="hover:bg-purple-200">
                                        <td className="p-2">{index + 1}</td>
                                        <td className="p-2">
                                            <img
                                                src={customer.CustomerPic}
                                                alt={`${customer.CustomerName}'s Avatar`}
                                                className="w-10 h-10 rounded-full"
                                            />
                                        </td>
                                        <td className="p-2">{customer.CustomerName}</td>
                                        <td className="p-2">{customer.CustomerId}</td>
                                        <td className="p-2">{customer.CNIC}</td>
                                        <td className="p-2">{customer.CustomerLoc}</td>
                                        <td className="p-2">{customer.CustomerCell}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SubProfile