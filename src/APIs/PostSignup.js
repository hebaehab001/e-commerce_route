export default async function PostSignup(data) {
    console.log(data);
    
    const res = await fetch(process.env.POST_SIGNUP, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};