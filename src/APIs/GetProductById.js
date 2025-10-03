export default async function getProductById(id) {
    const res = await fetch(`${process.env.GET_PRODUCTS}/${id}`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};

