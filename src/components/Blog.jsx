import blogData from "../mockData/blogData";

export const CreatMiniArticles = ({ mini }) => {
    const firstRow = mini.slice(0, 2);
    const secondRow = mini.slice(2, 4);

    const miniBlogs = (article) => (
        <div className="blog-item mini" key={article.title}>
            <img src={article.image.src} alt={article.image.alt} />
            <div className="blog__text mini">
                <p className="blog__date">{article.date}</p>
                <h3 className="blog__title">{article.title}</h3>
                <a href={article.href} className="blog__link">{article.readMoreInfo}</a>
            </div>
        </div>
    );

    return (
        <div className="blog_mini_container">
            <div className="blog-row">
                {firstRow.map(miniBlogs)}
            </div>
            <div className="blog-row">
                {secondRow.map(miniBlogs)}
            </div>
        </div>
    );
};

export const Blog = () => {
    const { header, main, mini } = blogData;

    return (
        <>
            <h1 className="blog__header">{header}</h1>
            <div className="news">
                <div className="blog__content">
                    <div className="blog-row">
                        <div className="blog-item main">
                            <img src={main.image.src} alt={main.image.alt} />
                            <div className="blog__text main">
                                <p className="blog__date">{main.date}</p>
                                <h3 className="blog__main__title">{main.title}</h3>
                                <a href={main.href} className="blog__link">{main.readMoreInfo}</a>
                            </div>
                        </div>
                    </div>
                    <CreatMiniArticles mini={mini} />
                </div>
            </div>
        </>
    );
};

export default Blog;