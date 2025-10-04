export default async function PostSignIn(data) {
    console.log(data);

    const res = await fetch(process.env.POST_SIGNIN, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error("error in fetch api response");
    }
    return res.json();
};