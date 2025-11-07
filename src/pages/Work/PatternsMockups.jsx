import { useParams, Link } from 'react-router-dom';
import patternsData from '../../assets/js/patternsData.js';
import './styles/patternsMockups.css';
import { IoIosArrowBack } from "react-icons/io";

function PatternsMockups() {
    const {id} = useParams();
    const pattern = patternsData.find(item => item.id === parseInt(id));

    if(!pattern){
        return <h2>Error 404: Pattern Not Found</h2>;
    }

    const mockups = [pattern.mockup01, pattern.mockup02, pattern.mockup03];

    return (
        <div className='mockups__container'>
            <Link to="/patterns" className='back_btn'><IoIosArrowBack /></Link>

            <div className='mockups__gallery'>
                {mockups.map((img, index) => (
                    <img key={index} src={img} alt={`Mockup ${index + 1}`} className='mockup__img'/>
                ))}
            </div>

            <h2>{pattern.name}</h2>
        </div> 
    )
}

export default PatternsMockups;