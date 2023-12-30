import PostCard from "@/components/PostCard";
import { resolve } from "path";
import React from "react";

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // await new Promise(resolve => setTimeout(resolve, 5000))

    return data;
}

const PostsPage: React.FC = async () => {

   const posts = await loadPosts();
   console.log(posts)

    return (
      <div className="posts">
        { posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
        ))}
      </div>
    )
  }
  
  export default PostsPage