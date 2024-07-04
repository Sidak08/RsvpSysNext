"use client";

export default function ReadLocalStorage() {
  let user = false;

  if (typeof window !== "undefined") {
    console.log(
      "reading local storage",
      window.localStorage.getItem("currentUser"),
    );
    const storedUser = JSON.parse(window.localStorage.getItem("currentUser"));
    user = storedUser;

    if (user) {
      return user;
    }
    return false;
  }
}
