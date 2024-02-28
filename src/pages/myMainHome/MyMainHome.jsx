import React from 'react'
import './myMainHome.css'
import HomeHeroSlider from '../../components/homeHeroSlider/HomeHeroSlider'
import MyServices from '../../components/MyServices/MyServices'
import webIcon from '../../assets/svgIcons/web.png'
import mopileIcon from '../../assets/svgIcons/mobile-development.png'
import UiUx from '../../assets/svgIcons/ui-ux.png'
import graphicIcon from '../../assets/svgIcons/illustration.png'
import AboutUsSec from '../../components/aboutUsSec/AboutUsSec'
import HomeProjects from '../../components/homeProjects/HomeProjects'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'
export default function MyMainHome() {
    const servicesArray = [
        {
            num: "01",
            title: "Web Development",
            description: "Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem",
            icon: webIcon
        },
        {
            num: "02",
            title: "App Development",
            description: "Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem",
            icon: mopileIcon
        },
        {
            num: "03",
            title: "UI/UX Design",
            description: "Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem",
            icon: UiUx
        },
        {
            num: "04",
            title: "Graphic Design",
            description: "Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem",
            icon: graphicIcon
        },
    ];
    return (
        <>
            <HomeHeroSlider />
            <MyServices servicesArray={servicesArray}/>
            <AboutUsSec />
            <HomeProjects />
            <WhyChooseUs />
            <LetsTalkSec />
        </>
    )
}
