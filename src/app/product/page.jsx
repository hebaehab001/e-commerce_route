import getAllProducts from "../../APIs/GetAllProducts";
import ProductsCard from "../_Components/ProductsCard/ProductsCard";

export default async function Product() {
  const { data } = await getAllProducts();
  if (!data) return <h1 className="text-white">Loading</h1>;

  return (
    data && (
      <>
        <div className="grid grid-cols-5 gap-5 mb-4">
          {data.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
        <nav
          aria-label="Page navigation example"
          className="flex justify-center mt-5"
        >
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  );
}
