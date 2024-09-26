const categories =
  [
    { id: 1, title: 'All', value: 'all clothing' },
    { id: 2, title: 'Men', value: "men's clothing" },
    { id: 3, title: 'Women', value: "women's clothing" },
    { id: 4, title: 'Jewelry', value: 'jewelery' },
    { id: 5, title: 'Electronics', value: 'electronics' },
  ] || [];

const ProductCategory = ({ selectedCategory, handleCategory }) => {
  return (
    <div className="flex flex-row py-5 justify-evenly">
      {categories &&
        categories.map((category) => {
          const isSelected = selectedCategory === category.value;
          return (
            <p
              key={category.id}
              className={`px-1 cursor-pointer ${
                isSelected && 'font-semibold border-b-[1px] border-black'
              }`}
              onClick={() => handleCategory(category)}
            >
              {category.title}
            </p>
          );
        })}
    </div>
  );
};

export default ProductCategory;
