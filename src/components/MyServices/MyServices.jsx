import React from 'react'
import './myServices.css'
import { NavLink } from 'react-router-dom'
export default function MyServices({ servicesArray }) {
    return (
        <div className='myServices__handler sec_padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-4">
                        <div className="main__title">
                            <span>what we do</span>
                            <h2>we work performed for client happy.</h2>
                            <NavLink to={'/services'} className='nav-link'>
                                <div className="get__touch__btn hover__effect">
                                    view all services
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8 col-xl-8">
                        <div className="row g-4">
                            {
                                servicesArray?.map((item, index) => (
                                    <div key={index} className="col-md-6 col-lg-6 col-sm-6 col-xl-6">
                                        <div className="single__card__service">
                                            <span>{item?.num}</span>
                                            <div className="service__icon">
                                                <i>
                                                    <img src={item?.icon} alt="icon" />
                                                </i>
                                            </div>
                                            <div className="service__content">
                                                <h4>
                                                    {item?.title}
                                                </h4>
                                                <p>
                                                    {item?.description}
                                                </p>
                                                <NavLink className="nav-link service__card__btn" 
                                                to={`/services/${item.title.toLowerCase()}`}>
                                                    read more <i className="bi bi-arrow-right-circle"></i>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
