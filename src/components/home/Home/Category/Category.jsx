

import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Category = () => {
  const [architects, setArchitects] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [buildings, setBuildings] = useState([])
  const url1 = ('http://localhost:3000/categories?category=Construction%20Vehicle%20Toys');
  useEffect(() => {
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        setVehicles(data)
        console.log(data)
      })
  }, [url1])


  const url2 = ('http://localhost:3000/categories?category=Architectural%20Building%20Kits');
  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        setArchitects(data)
        console.log(data)
      })
  }, [url2])


  const url3 = ('http://localhost:3000/categories?category=Interlocking Building Toys');
  useEffect(() => {
    fetch(url3)
      .then(res => res.json())
      .then(data => {
        setBuildings(data)
        console.log(data)
      })
  }, [url3])

  return (
    <div className="max-w-full  mx-auto my-10 ">
      <h2 className='text-center text-5xl font-bold my-5'>Shop By Category</h2>

      <Tabs >
        <TabList className="flex flex-col justify-center md:flex-row   ">
          <Tab
            className="py-4 px-6 text-gray-600  hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Construction Vehicle Toys
          </Tab>
          <Tab
            className="py-4 px-6 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Architectural Building Kits
          </Tab>
          <Tab
            className="py-4 px-6 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Interlocking Building Toys
          </Tab>
        </TabList>

        <div className="mt-6 ">
          <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {vehicles?.map(vehicle => <div key={vehicle._id}
            >
              <div className="card card-compact pb-6 md:pb-0  md:pe-6 border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img src={vehicle.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title capitalize">{vehicle.name}</h2>
                  <Rating
                    readonly
                    placeholderRating={vehicle.rating}
                    emptySymbol={<FaRegStar className='text-xl text-yellow-500'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                  />
                  <p className='text-xl'>Price: <span className='text-xl font-bold text-orange-500'>{vehicle.price}</span></p>

                  <div className="card-actions md:justify-end">
                    <Link to={`/details/${vehicle._id}`}><button className="btn bg-fuchsia-600 border-none">view details</button></Link>
                  </div>
                </div>
              </div>
            </div>)}
          </TabPanel>

          <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {architects?.map(archi => <div key={archi._id}
            >
              <div className="card card-compact pb-6 md:pb-0  md:pe-6 border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img src={archi.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title capitalize">{archi.name}</h2>
                  <Rating
                    readonly
                    placeholderRating={archi.rating}
                    emptySymbol={<FaRegStar className='text-xl text-yellow-500'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                  />
                  <p className='text-xl'>Price: <span className='text-xl font-bold text-orange-500'>{archi.price}</span></p>

                  <div className="card-actions md:justify-end">
                    <Link to={`/details/${archi._id}`}><button className="btn bg-fuchsia-600 border-none">view details</button></Link>
                  </div>
                </div>
              </div>
            </div>)}
          </TabPanel>

          <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {buildings?.map(building => <div key={building._id}
            >
              <div className="card card-compact pb-6 md:pb-0  md:pe-6 border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img src={building.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title capitalize">{building.name}</h2>
                  <Rating
                    readonly
                    placeholderRating={building.rating}
                    emptySymbol={<FaRegStar className='text-xl text-yellow-500'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar className='text-xl text-yellow-500'></FaStar>}
                  />
                  <p className='text-xl'>Price: <span className='text-xl font-bold text-orange-500'>{building.price}</span></p>

                  <div className="card-actions md:justify-end">
                  <Link to={`/details/${building._id}`}><button className="btn bg-fuchsia-600 border-none">view details</button></Link>
                  </div>
                </div>
              </div>
            </div>)}
          </TabPanel>




        </div>
      </Tabs>
    </div>
  );
};

export default Category;
