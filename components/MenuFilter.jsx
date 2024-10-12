export const MenuFilter = ({ menuData }) => {
    const allCategories = [
        "all",
        ...new Set(menuData.map((menuCat) => menuCat.category)),
    ];
    console.log(allCategories);

    return (
        <div>
            <button>kykk</button>
        </div>
    );
};
