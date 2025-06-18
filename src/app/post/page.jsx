import Link from "next/link";

export const GetAllPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data = await res.json()
    return data
}

export const metadata = {
    title: "All Post",
    description: "Loading Json Data From MealsDB API",
};

const PostPages = async () => {
    const appPost = await GetAllPost()
    console.log('appPost', appPost);
    return (
        <div>
            <h2> Post Pages</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    appPost.map(p => {
                        return (
                            <div key={p.id} >
                                <div>
                                    <h2>{p.name}</h2>
                                    <Link href={`/post/${p.id}`}>
                                        <button>Details</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};

export default PostPages;