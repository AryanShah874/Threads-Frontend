import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage(){
  return(
    <>
      <UserHeader />
      <UserPost likes={1223} replies={481} postImg={'/post1.png'} postTitle={"My recent talk about AI."} />
      <UserPost likes={463} replies={561} postImg={'/post2.png'} postTitle={"Let's talk about threads."} />
      <UserPost likes={1245} replies={431} postImg={'/post3.png'} postTitle={"Let's talk Twitter v/s Threads"} />
      <UserPost likes={1245} replies={431} postTitle={"Let's talk."} />
    </>
  );
}

export default UserPage;