import React from 'react'

const NFTDropPage = () => {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="lg:min- flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="lg: w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">DLCCFAM Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of DLCCFAM Apes who live & breath React
            </h2>
          </div>
        </div>
      </div>
      {/*right */}
      <div></div>
    </div>
  )
}

export default NFTDropPage
