import './certification.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import ServicesData from '../../assets/services_data';
import arrowIcon from '../../assets/arrow_icon.svg';
export default function Certification() {
    return (
        <div className='certification' id='Certifications'>
            <div className="certification-title">
                <h1>My Certification</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="certification-container">
                {ServicesData.map((service, index) => {
                    return <div className='certification-card' key={index}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='service-readmore'>
                            <p>Read more</p>
                            <img src={arrowIcon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}