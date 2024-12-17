import registrationInfoData from "../mockData/registrationInfoData";

export const RightContainer = ({item}) => {

    const {buttonText} = item;

    return(
        <div className="registration_info__right">
            <button className="registration_info_btn__right">{buttonText}</button>
    </div>
    );
};

export const RegistrationInfo = () => {
    const {title, text} = registrationInfoData;
    return (
        <>
        <div className="registration_info__left">
            <p className="registration_info_link__left">{title}</p>
            <h3 className="registration_info_header__left">{text}</h3>
        </div>
        <RightContainer item={registrationInfoData}/>
        </>
    );
};

export default RegistrationInfo;


