import React from 'react'
import './singleServicePage.css'
import { useParams } from 'react-router-dom';
import HeroPageSec from '../../components/heroPageSec/HeroPageSec';
import ServiceDetailSec from '../../components/serviceDetailSec/ServiceDetailSec';
export default function SingleServicePage({ servicesArray }) {
    const { serviceName } = useParams();
    const service = servicesArray?.find(service => service?.title?.toLowerCase() === serviceName?.toLowerCase());
    console.log(serviceName);
    console.log(service.num);
    return (
        <div>
            <HeroPageSec title={serviceName}
                linkItem={{ to: '/', text: 'Home' }} />
            <ServiceDetailSec service={service}/>
        </div>
    )
}
