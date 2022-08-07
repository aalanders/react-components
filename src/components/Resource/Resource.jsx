import React, { useState, useEffect } from "react";
import "../Counter/Counter.css";

const Resource = () => {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    // With async await
    // async function myFetch() {
    //   try {
    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/${resource}`
    //     );
    //     const text = await response.text();
    //     const data = JSON.parse(text);
    //     setItems(data);
    //   } catch (err) {
    //     // The response wasn't a JSON object
    //     setItems([{ error: "Error with API" }]);
    //   }
    // }
    // myFetch();

    // With try catch statement
    // try {
    //   fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    //     .then((response) => response.json())
    //     .then((json) => setItems(json));
    // } catch (err) {
    //   setItems([{ error: "Message" }]);
    // }
  }, [resource]);

  return (
    <div>
      <h3>Resource</h3>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>

      <h4>{resource}</h4>
      <div>
        {items.length &&
          items.map((item) => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>;
          })}
      </div>
    </div>
  );
};

export default Resource;
