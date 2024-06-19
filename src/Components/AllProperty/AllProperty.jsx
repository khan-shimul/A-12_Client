import React, { useState, useEffect } from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAllProperty from './ShowAllProperty';

const AllProperty = () => {
    const axiosSecure = useaxiousSecure();
    const { refetch, data: verifiedProperties = [] } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allproperty');
            return res.data;
        }
    });

    console.log(verifiedProperties);

    const [property, setProperty] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        setProperty(verifiedProperties);
    }, [verifiedProperties]);

    const handleSearch = () => {
        const filteredProperty = verifiedProperties.filter((property) =>
            property?.location.toLowerCase().includes(searchValue.toLowerCase())
        );
        setProperty(filteredProperty);
    };

    const handleSort = (order) => {
        let sortedProperty = [...verifiedProperties];
        if (order === "asc") {
            sortedProperty.sort((a, b) => parseFloat(a.minPrice) - parseFloat(b.minPrice));
        } else if (order === "desc") {
            sortedProperty.sort((a, b) => parseFloat(b.minPrice) - parseFloat(a.minPrice));
        }
        setProperty(sortedProperty);
    };

    useEffect(() => {
        if (sortOrder) {
            handleSort(sortOrder);
        }
    }, [sortOrder, verifiedProperties]);

    return (
        <div className=''>
            <div className='text-center pt-24'>
                <h1 className='text-3xl font-bold text-orange-400 mt-5'>
                    Here is ALL Property Verified By Admin
                </h1>
            </div>
            <div className="flex items-center justify-center gap-14">
                <div>
                    <input
                        className="border-2 lg:px-6 py-3 mt-5 rounded-lg border-red-800"
                        placeholder="Search here"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div>
                    <select
                        className="border-2 lg:px-6 py-3 mt-5 rounded-lg text-green-500 border-green-700"
                        value={sortOrder}
                        onChange= {(e) => setSortOrder(e.target.value)}
                    >
                        
                        <option className='text-green-600' value="asc">Ascending</option>
                        <option className='text-green-600' value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    property?.map(property => (
                        <ShowAllProperty key={property._id} property={property} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllProperty;
