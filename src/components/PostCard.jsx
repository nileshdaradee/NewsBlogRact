import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="w-full flex justify-center mb-4">
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className="rounded-xl w-full h-48 object-cover" 
          />
        </div>
        <h2 className="text-xl font-bold text-center">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard
