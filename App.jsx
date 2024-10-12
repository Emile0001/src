import { Menu } from "./components/Menu";
import { MenuFilter } from "./components/MenuFilter";
import { Title } from "./components/Title";
import menuData from "./data";

const App = () => {
    return (
        <main>
            <section>
                <Title title={"our menu"} />
            </section>
            <section>
                <MenuFilter menuData={menuData} />
            </section>
            <article>
                <Menu menuData={menuData} />
            </article>
        </main>
    );
};
export default App;
