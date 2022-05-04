import useService from '../../../hooks/useService';
import Service from '../Service/Service'
import './Services.css';
import Typed from 'react-typed';

const Services = () => {
    const [services, setServices] = useService()
    const homeServices = services.slice(0, 6)
    return (
        <div>
            <h1 style={{ marginTop: "6.5rem" }} className='text-center'>
                <Typed
                    strings={[
                        'Furniture Store']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>

            </h1>
            <div className='container services'>
                {
                    homeServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;

