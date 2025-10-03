export default async function getAllCategories() {
    const res = await fetch(`${process.env.GET_CATEOGRIES}`, {
        cache:'force-cache'
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};