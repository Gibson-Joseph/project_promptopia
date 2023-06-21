"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Profile from "@components/Profile";

const MyProfile = () => {
  // const { data: session } = useSession();
  const session_id = useSelector((state) => state.authPersistedReducer.id);
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    ); // this is browser API
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log("Delete error", error);
      }
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session_id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session_id) fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt/test");
      const data = await response.json();
      // console.log("data", data);
      // setPosts(data);
      console.log("Profile_Posts", data);
    };
    fetchPost();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
