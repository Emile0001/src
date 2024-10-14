import { MenuItems } from "./MenuItems";

export const Menu = ({ menuItems }) => {
    return (
        <section>
            {menuItems.map((menuItem) => {
                return <MenuItems key={menuItem.id} {...menuItem} />;
            })}
        </section>
    );
};
