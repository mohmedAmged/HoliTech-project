import React from 'react'
import './serviceDetailSec.css'
export default function ServiceDetailSec({service}) {
    return (
        <div className='service__detail__handler sec_margin'>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        {/* <div className="single__service__details">
                            <h3>
                                <img src={service?.icon} alt="icon" />
                                {service?.title}
                            </h3>
                            <p>

                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
