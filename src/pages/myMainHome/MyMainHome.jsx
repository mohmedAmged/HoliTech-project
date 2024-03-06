import React from 'react'
import './myMainHome.css'
import HomeHeroSlider from '../../components/homeHeroSlider/HomeHeroSlider'
import MyServices from '../../components/MyServices/MyServices'
import AboutUsSec from '../../components/aboutUsSec/AboutUsSec'
import HomeProjects from '../../components/homeProjects/HomeProjects'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'
export default function MyMainHome({servicesArray, projcetCards}) {

    return (
        <>
            <HomeHeroSlider />
            <MyServices servicesArray={servicesArray?.slice(0,4)}/>
            <AboutUsSec />
            <HomeProjects projcetCards={projcetCards}/>
            <WhyChooseUs />
            <LetsTalkSec />
        </>
    )
}
