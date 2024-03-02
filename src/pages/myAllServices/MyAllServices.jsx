import React from 'react'
import HeroPageSec from '../../components/heroPageSec/HeroPageSec'
import MyServices from '../../components/MyServices/MyServices'
import webIcon from '../../assets/svgIcons/web.png'
import mopileIcon from '../../assets/svgIcons/mobile-development.png'
import UiUx from '../../assets/svgIcons/ui-ux.png'
import graphicIcon from '../../assets/svgIcons/illustration.png'
import backend from '../../assets/svgIcons/backend.png'
import content from '../../assets/svgIcons/content.png'
import ai from '../../assets/svgIcons/automation.png'
import support from '../../assets/svgIcons/maintenance.png'
import WorkProcess from '../../components/workProcess/WorkProcess'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'

export default function MyAllServices() {
    const servicesArray = [
        {
            num: "01",
            title: "Web Development",
            description: "Crafting dynamic & responsive websites for impactful online presence",
            icon: webIcon
        },
        {
            num: "02",
            title: "App Development",
            description: "Turning ideas into intuitive mobile apps for exceptional experiences.",
            icon: mopileIcon
        },
        {
            num: "03",
            title: "UI/UX Design",
            description: "Creating intuitive interfaces for delightful digital experiences.",
            icon: UiUx
        },
        {
            num: "04",
            title: "Graphic Design",
            description: "Bringing brands to life through captivating visuals & design.",
            icon: graphicIcon
        },
        {
            num: "05",
            title: "Backend",
            description: "Powering applications with robust backend solutions.",
            icon: backend
        },
        {
            num: "06",
            title: "Content Writing",
            description: "Compelling content that resonates with your audience.",
            icon: content
        },
        {
            num: "07",
            title: "Ai Development",
            description: "Unlocking possibilities with advanced AI technology.",
            icon: ai
        },
        {
            num: "08",
            title: "Technical Support",
            description: "Reliable support for digital operations.",
            icon: support
        },
    ];
    return (
        <div>
            <HeroPageSec title="Services" 
                linkItem={{ to: '/', text: 'Home' }} />
            <MyServices servicesArray={servicesArray}/>
            <WorkProcess />
            <LetsTalkSec />
        </div>
    )
}
