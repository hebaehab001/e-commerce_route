import React from 'react'
import Image from "next/image";
export default function ProductCardDetails({data}) {
  return (
    <div className="grid grid-cols-2 p-4  w-full flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="grid col-span-1  gap-3">
        <div className="flex justify-center gap-2 items-center rounded-2xl">
          <div className={`grid grid-cols-${data?.images.length} gap-4`}>
            {data?.images.map((myimg) => (
              <Image
                key={myimg}
                className=" rounded-lg"
                src={myimg}
                alt="img"
                height={100}
                width={80}
              />
            ))}
          </div>
          <Image
            className="h-[400px] max-w-full rounded-lg "
            src={data?.images[0]}
            alt="img"
            height={400}
            width={300}
          />
        </div>
      </div>

   
        <div className="col-span-1 flex flex-col justify-around h-full py-20 p-4 leading-normal ">
          <h2 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.title}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.description}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 flex text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ">
              <span className="px-1">Rate : {data.ratingsAverage}</span>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </span>
          </div>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.category.name}
          </p>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.price} EGP
          </p>
          <button className="w-full bg-black  rounded-2xl py-2">
            Add To Cart
          </button>
 
      </div>
    </div>
  );
}
