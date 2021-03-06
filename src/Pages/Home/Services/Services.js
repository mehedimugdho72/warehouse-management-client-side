import useService from '../../../hooks/useService';
import Service from '../Service/Service'
import './Services.css';
import Typed from 'react-typed';

const Services = () => {
    const [services] = useService()
    const homeServices = services.slice(0, 6)
    return (
        <div className='service-container'>
            <h1 className='text-center text-white'>
                <Typed
                    strings={[
                        'Furniture Store']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </h1>
            <div>
                <div className='container services'>
                    {
                        homeServices.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;

