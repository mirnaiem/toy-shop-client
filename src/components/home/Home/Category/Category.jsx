import Aos from 'aos';
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Category = () => {
  useEffect(()=>{
    Aos.init({
     duration:2000
    })
  },[])
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()
  const [architects, setArchitects] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [buildings, setBuildings] = useState([])

  const handleViewDetails=id=>{
  if(user){
    navigate(`/details/${id}`)
  }
  else{
    Swal.fire({
      title: 'You Have To Login First',
     
    })
    navigate(`/details/${id}`)
  }
  }
  const url1 = ('https://assignment-11-server-alpha-six.vercel.app/categories?category=Construction%20Vehicle%20Toys');
  useEffect(() => {
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        setVehicles(data)
        console.log(data)
      })
  }, [url1])


  const url2 = ('https://assignment-11-server-alpha-six.vercel.app/categories?category=Architectural%20Building%20Kits');
  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        setArchitects(data)
        console.log(data)
      })
  }, [url2])


  const url3 = ('https://assignment-11-server-alpha-six.vercel.app/categories?category=Interlocking Building Toys');
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
      <h2 className='text-center text-3xl md:text-5xl font-bold text-[#393939]my-5'>Shop By Category</h2>
      <div className="divider  mx-auto w-1/5"></div>
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
              <div data-aos="fade-up" className="card card-compact p-4  border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img className='h-[250px] w-full' src={vehicle.picture} alt="" /></figure>
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
                    <button onClick={()=>handleViewDetails(vehicle._id)} className="btn bg-fuchsia-600 border-none">view details</button>
                  </div>
                </div>
              </div>
            </div>)}
          </TabPanel>

          <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {architects?.map(archi => <div key={archi._id}
            >
              <div data-aos="fade-up" className="card card-compact p-4 border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img className='h-[250px] w-full' src={archi.picture} alt="" /></figure>
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
                    <button onClick={()=>handleViewDetails(archi._id)} className="btn bg-fuchsia-600 border-none">view details</button>
                  </div>
                </div>
              </div>
            </div>)}
          </TabPanel>

          <TabPanel className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {buildings?.map(building => <div key={building._id}
            >
              <div data-aos="fade-up" className="card card-compact p-4 border-b  md:border-b-0 md:border-e  bg-base-100 rounded-none">
                <figure><img className='h-[250px] w-full' src={building.picture} alt="" /></figure>
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
                  <button onClick={()=>handleViewDetails(building._id)} className="btn bg-fuchsia-600 border-none">view details</button>
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
