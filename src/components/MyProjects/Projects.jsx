import './project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import workData from '../../assets/mywork_data'
import arrowIcon from '../../assets/arrow_icon.svg';
export default function Projects() {
    return (
        <div className='my-projects'>
            <div className="project-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="project-container">
                {workData.map((work, index) => {
                    return <img key={index} src={work.w_img} alt='' />
                })}
            </div>
            <div className="project-showmore">
                <p>Show more</p>
                <img src={arrowIcon} alt="" />
            </div>
        </div>
    )
}