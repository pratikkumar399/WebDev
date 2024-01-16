import { useEffect, useRef, useState } from "react"


type postType = {
    title: string;
    body: string;
}

const UseEffectTwo = () => {
    const [post, setPost] = useState<postType>({
        title: "",
        body: ""
    });

    const effectRan = useRef(false);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("mounted")
        if (effectRan.current === false) {
            fetch(`https://dummyjson.com/posts/`)
                .then(res => res.json())
                .then((res) => {
                    console.log(res.posts[Math.floor(Math.random() * 30)])
                    setPost(res.posts[Math.floor(Math.random() * 30)]);
                    setLoading(false);
                })

            return () => {
                console.log("useeffect unmounted")
                effectRan.current = true;
            }
        }

    }, [])

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    <>
                        <div>
                            <h1>{post?.title}</h1>
                            <br />
                            <p>
                                {post?.body}
                            </p>
                        </div>
                    </>
            }
        </>

    )
}

export default UseEffectTwo
