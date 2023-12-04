import React from "react";

export default function Status({
  message,
}: {
  message: "loading" | "success" | "error";
}) {
  return (
    <div>
      {message === "loading" ? (
        <h2>Loading....</h2>
      ) : message === "success" ? (
        <h2>Data fetched successfully</h2>
      ) : message === "error" ? (
        <h2>Error in data fetching</h2>
      ) : (
        ""
      )}
    </div>
  );
}
