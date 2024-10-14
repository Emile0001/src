import { useState } from "react";
import { Menu } from "./components/Menu";
import { MenuFilter } from "./components/MenuFilter";
import { Title } from "./components/Title";
import menuData from "./data";

const allCategories = [
    "all",
    ...new Set(menuData.map((menuCat) => menuCat.category)),
];
let arrayCategories = Array.from(allCategories);

const App = () => {
    const [menuItems, setMenuItems] = useState(menuData);
    const [categories, setCategories] = useState(arrayCategories);
    return (
        <main>
            <section>
                <Title title={"our menu"} />
            </section>
            <section>
                <MenuFilter categories={categories} />
            </section>
            <article>
                <Menu menuItems={menuItems} />
            </article>
        </main>
    );
};
export default App;
