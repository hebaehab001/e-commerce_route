export default async function getAllProducts() {
    const res = await fetch(process.env.GET_PRODUCTS, {
        next: { revalidate: 600 },
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};