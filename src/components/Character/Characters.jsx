import React from 'react'

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card">
            <img src={item.image} alt="" />
              <div className="card-boby">
                <h5 className="title">{item.name}</h5>
                <hr />
                <p>especies: {item.species}</p>
                <p>location: {item.location.name}</p>
                <p>alive: {item.status}</p>
              </div>
          </div>
        </div>

      ))}

    </div>
  )
}

export default Characters
