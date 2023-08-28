"use client";
import Post from "@/components/items/Post";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { deletePost, getPosts } from "@/lib/functions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default withPageAuthRequired(function Page() {
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [fetchedPosts, setFetchedPosts] = useState<PostWithId[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      await getPosts().then((posts) => {
        setFetchedPosts(posts);
        setLoadingPosts(false);
        console.log(posts);
      });
    }
    fetchPosts();
  }, []);
  function handleDeletePost(_id: string) {
    async function handler() {
      await deletePost(_id);
    }
    setFetchedPosts((prev) => prev.filter((post) => post._id !== _id));
    handler();
  }

  return (
    <section className="w-full flex flex-col items-center">
      <section className="w-[95%] max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-4 text-indigo-600">Your posts</h1>
        <div className="w-full flex flex-col gap-8 mt-4 items-center">
          {loadingPosts && (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}
          {!loadingPosts && fetchedPosts.length === 0 && (
            <h1 className="text-2xl font-bold text-center text-gray-800">
              You have no posts yet!
            </h1>
          )}
          {!loadingPosts &&
            fetchedPosts.length > 0 &&
            fetchedPosts.map((post, index) => (
              <Post post={post} key={post._id} handleDeletePost={handleDeletePost}/>
            ))}
        </div>
      </section>
    </section>
  );
});
