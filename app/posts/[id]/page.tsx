import React, { useState, useEffect, Suspense } from 'react';
import PostsPage from '../page';

type Params = {
    id: number;
};

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const loadPost = async (id: number): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

type PostPageProps = {
    params: Params;
};

const PostPage: React.FC<PostPageProps> = async ({ params }) => {

    const post = await loadPost(params.id);

    return (
        <div>
            <h1>{ post.id }. { post.title }</h1>
            <p>{ post.body }</p>
            <hr />

            <h3>Otras publicaciontes</h3>

            <Suspense fallback={<div>
                Cargando...
            </div>}>
                <PostsPage />
            </Suspense>

        </div>
    );
}

export default PostPage;