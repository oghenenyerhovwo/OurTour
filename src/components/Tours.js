import React, { useState } from 'react'

const Tours = ({tour,setData}) => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(toggle => !toggle)
    const handleDelete = () => setData(data => data.filter(item => item.id !== tour.id))
    return (
        <li className="single-tour">
            <img src={tour.image} alt={tour.name} />
            <footer>
                <div className="tour-info">
                    <h4>{tour.name} </h4>
                    <h4 className="tour-price">{tour.price} </h4>
                </div>
                <div className="tour-info">
                    <p>
                        {toggle ? tour.info.slice(0,200) +"..." : tour.info} 
                        <button onClick={handleToggle}>{toggle ? "Show more": "Show less"}</button>
                    </p>
                </div>
                    <button onClick={handleDelete} className="delete-btn">Not Interested</button>
                
            </footer>
            
        </li>
    )
}

export default Tours
