/* Home page of Silver Dipper Site. Includes
SIVER DIPPER logo and
Proudly serving Chocolate Shoppe Ice Cream since 2003*/

import img from '../assets/full-logo.png';
/*import '../styles/homeTitle.css';*/

const HomeTitle = () => {
    const slogan = 'Proudly serving Chocolate Shoppe Ice Cream since 2003';
    return (
        <div className="title-container">
            <div className="title-container__img">
                <img src={img} alt={'Silver Dipper'} />
            </div>
            <div className="title-container__content">
                <p>{slogan}</p>
            </div>
        </div>
    );
}
export default HomeTitle;