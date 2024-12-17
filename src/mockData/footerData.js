import gptsvg from "../assets/img/GPT-3.svg"

const FooterImage = {
    src: gptsvg,
    alt: "GPT-3",
};

const footerData = {
    title: "Хотите Шагнуть в Будущее Раньше Других?",
    button: {
        text: "Запросить ранний доступ",
        href: "#"
    },
    src: FooterImage,
    address: "ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013",
    rights: "© 2023 GPT-3. Все права защищены",
    links: {
        mainLinks: [
            { text: "Овероны", url: "" },
            { text: "Соц. сети", url: "" },
            { text: "Счетчики", url: "" },
            { text: "Контакты", url: "" },
        ],
        companyLinks: [
            { text: "Условия использования", url: "" },
            { text: "Перс. данные", url: "" },
            { text: "Контакты", url: "" },
        ],
    },
    contactInfo: {
        phoneNumber: "+7 (342) 2-198-520",
        email: "info@pstu.ru",
    },
};

export default footerData;
