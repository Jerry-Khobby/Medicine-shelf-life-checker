import React from 'react'

const ProductsLoaderSkeleton = () => {
    const numbers = [1,2,3,4,5,6,7,8]
  return (
    <div className='w-full grid grid-cols-1 custom-xs:grid-cols-2 custom-sm:grid-cols-3 lg:grid-cols-4 place-items-center justify-center gap-8'>
        {
            numbers.map((number) => (
                <div key={number} className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))
        }
    </div>
  )
}

export default ProductsLoaderSkeleton;