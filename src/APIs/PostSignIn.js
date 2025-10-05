export default async function PostSignIn(data) {
    console.log(data);

    const res = await fetch(process.env.NEXT_PUBLIC_POST_SIGNIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    console.log(res);
    
    if (!res.ok) {
        throw new Error(res.json().message ||  "error in fetch api response");
    }
    return res.json();
};