import React from 'react';
import { Link } from 'react-router-dom';

const DisplayFood = (props) => {

    const displayFoodItems = ({ data }) => {
        if (data && data.length > 0) {
            return data.map(item => {
                return (
                    <div className='col-md-2 foodDiv' key={item.id} >
                        <div>
                            <img src={item.image} alt={item.name}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <Link to={`/foodDetails/${item.id}`}>
                            <p style={{ margin: 8 }}>
                                <center>
                                    {item.name}
                                </center>
                            </p>
                        </Link>
                    </div>
                )
            })
        }
    }
    return (
        <>
            {displayFoodItems(props)}
        </>
    )
}

export default DisplayFood;