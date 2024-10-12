import { MenuItems } from "./MenuItems";

export const Menu = ({ menuData }) => {
    return (
        <section>
            {menuData.map((menuItem) => {
                return <MenuItems key={menuItem.id} {...menuItem} />;
            })}
        </section>
    );
};
