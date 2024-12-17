import infoData from "../mockData/infoData";

const RightContainer = ( {item} ) => {
    const { title, mainText, link } = item;

    return (
        <div className="info__right">
            <a href={link.href} className="info__link">{link.text}</a>
            <h2 className="info_header__right">{title}</h2>
            <p className="info_main_text__right">{mainText}</p>
            <a href={link.href} className="info__link">{link.text}</a>
    </div>
    );
};

const Info = () => {
    const { image } = infoData;

    return (
        <>
            <div className="info__left">
                <img className="person_in_vr" src={image.src} alt={image.alt}/>
            </div>
            <RightContainer item={infoData}/>
        </>
    );
};

export default Info;