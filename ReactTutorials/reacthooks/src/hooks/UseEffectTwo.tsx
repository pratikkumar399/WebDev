import { useEffect, useState } from "react"

const UseEffectTwo = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((res) => {
                console.log(res.posts[Math.floor(Math.random() * 30)])
                setPost(res.posts[Math.floor(Math.random() * 30)]);
                setLoading(false);
            })
    }, [])

    return (
        <div>
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
        </div>

    )
}

export default UseEffectTwo
