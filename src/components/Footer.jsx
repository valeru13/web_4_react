import footerData from '../mockData/footerData';

const FooterAddress = ({address, image, rights}) => (
    <div class="adress">
        <img src={image} alt={image}/>
        <p class="footer_menu_text">{address}</p>
        <p class="footer_menu_text">{rights}</p>
    </div>
)
const FooterLinks = ({titleCategory, links}) => (
    <div class="links">
        <p class="category-title">{titleCategory}</p>
        {links.map((link, index) => (
            <a href={link.url} key={index}>
                {link.text}
            </a>
        ))}
    </div>
);

const FooterContacts = ({ titleCategory, address, contactInfo}) => (
    <div class="contacts">
        <p class="category-title">{titleCategory}</p>
        <p class="footer_menu_text">{address}</p>
        <p class="footer_menu_text">{contactInfo.phoneNumber}</p>
        <p class="footer_menu_text">{contactInfo.email}</p>
    </div>
);

const Footer = () => {
    const {title, button, image, address, rights, links, contactInfo } = footerData;

    return (
        <>
            <div className="footer_registration">
                <h1 className="footer_header">{title}</h1>
                <a href={button.href}>
                    <button className="step_into_future_btn">{button.text}</button>
                </a>
            </div>

            <div className="footer_menu">
                <div className="footer_categoty_menu">
                    <FooterAddress address={address} image={image} rights={rights}/>
                    <FooterLinks titleCategory="Ссылки" links={links.mainLinks}/>
                    <FooterLinks titleCategory="Компания" links={links.companyLinks}/>
                    <FooterContacts titleCategory="Контакты"  address={address} contactInfo={contactInfo} />
                </div>
            </div>
        </>
    );
};

export default Footer;
