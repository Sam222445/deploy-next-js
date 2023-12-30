"use client"

import Link from "next/link";

interface PostCardProps {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
      <div>
        <h3 className="font-bold">{post.id}. {post.title}</h3>
        <p>{post.body}</p>
        <Link className="py-2 px-3 rounded-lg bg-slate-900 text-gray-100" href={`/posts/${post.id}`}>
            Ver
        </Link>
      </div>
    )
}

export default PostCard