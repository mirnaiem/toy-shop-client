import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy/Toy';

const AllToys = () => {
  const loadedData = useLoaderData();
  const [loadedToys, setLoadedToys] = useState(loadedData);
  const [searchName, setSearchName] = useState('');

  const handleSearch = () => {
    fetch(`https://assignment-11-server-alpha-six.vercel.app/search?name=${searchName}`)
      .then(res => res.json())
      .then(data => {
        setLoadedToys(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleSortByPrice = () => {
    const sortedToys = [...loadedToys].sort((a, b) => a.price - b.price);
    
    setLoadedToys(sortedToys);
  };
  const handleSortByDescendingPrice = () => {
    const sortedToys = [...loadedToys].sort((a, b) => b.price - a.price);
    setLoadedToys(sortedToys);
  };

  return (
    <div className='my-16'>
      <h2 className="text-4xl text-center font-bold  text-gray-600 mb-8">
        You Will Find All The Added{' '}
        <span className="text-[#ff3300] text-5xl">Toys Information</span> Here!!
      </h2>

      <div className="form-control">
        <div className="input-group justify-between mb-5">
         <div className='flex items-center'>
         <input
            type="text"
            name="name"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
         </div>
         <div className="dropdown">
      <button className="btn dropdown-toggle">
        Sort By
      </button>
      <ul className="menu dropdown-content">
        <li>
          <button className="btn border-none bg-slate-950 text-white rounded-lg" onClick={handleSortByPrice}>
            Ascending
          </button>
        </li>
        <li>
          <button className="btn text-white border-none bg-slate-950 rounded-lg " onClick={handleSortByDescendingPrice}>
            Descending
          </button>
        </li>
      </ul>
    </div>
        </div>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Category</th>
            <th>Toy Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {loadedToys.map((toy, index) => (
            <Toy index={index} key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
