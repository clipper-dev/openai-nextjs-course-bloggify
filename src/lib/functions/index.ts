export async function generatePost(postPrompt: PostPrompt) {
  return await fetch("/api/posts/generatePost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postPrompt),
  });
}
export async function getPosts() {
  const res = await fetch("/api/posts/getPosts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const data = await res.json();
  return data.posts;
}

export async function deletePost(_id: string) {
  const res = await fetch("/api/posts/deletePost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id }),
  });
  const data = await res.json();
  return data;
}

export async function getProfile() {
  const res = await fetch("/api/profile/getProfile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const data = await res.json();
  return data.profile;
}

export async function addCredits() {
    const res = await fetch("/api/credits/addCredits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      window.location.href = data.session.url;
    
}
