import { useParams, Link } from 'react-router-dom';
import uxuiData from '../../assets/js/uxuiData.js';
import './styles/uxuiMockups.css';
import { IoIosArrowBack } from "react-icons/io";
import BackTopBtn from '../../components/BackTopBtn.jsx';

const UxuiMockups = () => {
  const { id } = useParams();
  const uxui = uxuiData.find(item => item.id === parseInt(id));

  if(!uxui){
    return <h2>Error 404: UX/UI File Not Found</h2>;
}

  return (
    <div className="uxui-mockups__container">
        <Link to="/uxui" className='uxui-back_btn'><IoIosArrowBack /></Link>

        <div className="uxui-mockups__gallery">
            {uxui.pdfImage.map((img, index) => (
                <div key={index} className="uxui-mockup__img-container">
                    <img src={img} alt={`Mockup ${index + 1}`} className="uxui-mockup__img" />
                </div>
            ))}
        </div>
        <BackTopBtn />
    </div>
  );
};

export default UxuiMockups;