import React from 'react';

const PostDetails = async ({ params }) => {
    const id = await params?.id;
    return (
        <div>
            PostDetails  {id}
        </div>
    );
};

export default PostDetails;