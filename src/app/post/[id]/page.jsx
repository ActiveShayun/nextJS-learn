import React from 'react';
import { GetAllPost } from '../page';

export const onePost = async ({ id }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}


export async function generateMetadata({ params }) {
    const { id } = params;

    const product = await onePost({ id })
    console.log('product', product.title);

    return {
        title: product.title,
        description: product.body
    }
}


const PostDetails = async ({ params }) => {
    const id = params?.id;
    if (!params || !params.id) {
        return <div>Invalid post ID</div>;
    }

    const singlePost = await onePost({ id })
    console.log('singlePost 2', singlePost);
    return (
        <div>
            PostDetails  {id}
            <p>{singlePost?.title}</p>
        </div>
    );
};

export default PostDetails;