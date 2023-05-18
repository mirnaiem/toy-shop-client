
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Category = () => {
  

  return (
    <div className="max-w-full  mx-auto my-10 ">
     <h2 className='text-center text-5xl font-bold my-5'>Shop By Category</h2>
      <Tabs >
        <TabList className="flex flex-col justify-center md:flex-row   ">
          <Tab
            className="py-4 px-6 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Electronics
          </Tab>
          <Tab
            className="py-4 px-6 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Clothing
          </Tab>
          <Tab
            className="py-4 px-6 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer leading-none"
            selectedClassName="text-gray-900 border-b-2 border-blue-500"
          >
            Home &amp; Kitchen
          </Tab>
        </TabList>

        <div className="mt-6">
          <TabPanel>
            <ul className="space-y-2 text-center">
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Phones
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Laptops
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Televisions
              </li>
            </ul>
          </TabPanel>

          <TabPanel>
            <ul className="space-y-2 text-center">
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Men's Clothing
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Women's Clothing
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Kids' Clothing
              </li>
            </ul>
          </TabPanel>

          <TabPanel>
            <ul className="space-y-2 text-center">
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Appliances
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Furniture
              </li>
              <li className="py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer bg-gray-100 rounded">
                Cookware
              </li>
            </ul>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
