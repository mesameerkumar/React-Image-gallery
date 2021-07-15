import React from "react";

const Card = ({image}) => {
    const tags=image.tags.split(",");
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-2xl ">
        <img src={image.webformatURL} className="w-full"  alt="image"/>
        <div className="px-6 py-4">
          <div className="text-bold text-blue-500 text-xl mb-2">
          Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>{image.views}
            </li>
            <li>
              <strong>Downloads: </strong>{image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>{image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
        {tags.map(tag=>(
        <span className="inline-block bg-purple-200 rounded-full text-sm 
        font-semibold text-gray-700 mr-2 px-3 py-1" key={image.id}>
        #{tag}
        </span>
        ))}
        </div>
      </div>
    )
}

export default Card;