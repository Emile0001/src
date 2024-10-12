export const MenuItems = ({ id, title, category, price, img, desc }) => {
    return (
        <section>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <span>{price}</span>
            <p>{desc}</p>
        </section>
    );
};
