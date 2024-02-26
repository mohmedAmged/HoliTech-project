import React from 'react'
import './aboutUsSec.css'
import missionIcon from '../../assets/svgIcons/mission.png'
import { NavLink } from 'react-router-dom'
import aboutImgOne from '../../assets/heroImgs/about-1.jpg'
import aboutImgtwo from '../../assets/heroImgs/about-2.jpg'
import completeTask from '../../assets/svgIcons/completed-task.png'
import clientRate from '../../assets/svgIcons/rating-stars.png'
import expertTeam from '../../assets/svgIcons/expert.png'
export default function AboutUsSec() {
    const counterNumbers = [
        {
            icon: completeTask,
            num: 30,
            taskTitle: "project completed"
        },
        {
            icon: clientRate,
            num: 10,
            taskTitle: "Satisfied Clients"
        },
        {
            icon: expertTeam,
            num: 10,
            taskTitle: "Expert Teams"
        },
    ]
    return (
        <div className='aboutUsSec__handler sec_margin'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="about__left__part">
                            <div className="main__title black">
                                <span>
                                    About us
                                </span>
                                <h2>
                                    Direction with our company.
                                </h2>
                            </div>
                            <p>
                            Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ei Donec lacinia placerat felis non aliquam.Integer purus odio.
                            </p>
                            <div className="our__mission__handler">
                                <div className="mission__icon">
                                    <i>
                                        <img src={missionIcon} alt="icon" />
                                    </i>
                                </div>
                                <div className="mission__content">
                                    <h5>
                                        Our Mission
                                    </h5>
                                    <p>
                                        Integer purus odio, placerat nec rhoni olor Class online and video.
                                    </p>
                                </div>
                            </div>
                            <NavLink to={'/about-us'} className='nav-link'>
                                <div className="get__touch__btn hover__effect">
                                    About more
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="about__right__part">
                            <div className="about__images">
                                <img className='first__img' src={aboutImgtwo} alt="about-img" />
                                <div className="about__image__top">
                                    <img src={aboutImgOne} alt="about-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutUsSec__count">
                    <div className="row">
                        {
                            counterNumbers?.map((el, index)=>(
                                <div key={index} className="col-lg-4 col-xl-4 col-md-4 col-sm-6">
                                <div className="single__count">
                                    <i>
                                        <img src={el?.icon} alt="icon" />
                                    </i>
                                    <div className="counter">
                                        <span>{el?.num}</span>
                                        <sup>+</sup>
                                    </div>
                                    <p>
                                        {el?.taskTitle}
                                    </p>
                                </div>
                            </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
