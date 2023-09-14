import React from 'react'
import UserContext from '../utils/UserContext';

//Lazy loading applied here
const Grocery = () => {
  return (
    <div className='flex justify-center'>
        <h1  className="p-4 m-4  bg-gray-100 rounded-md">Grocery webpage
        </h1>
        <div className="p-4 m-4  bg-gray-100 rounded-md">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
    </div>
  )
}

export default Grocery;