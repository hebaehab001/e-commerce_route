export default async function getAllBrands() {
    const res = await fetch(process.env.GET_BRANDS, {
        cache: 'force-cache'
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};