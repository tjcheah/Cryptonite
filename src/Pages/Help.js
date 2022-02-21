import React from "react";

import { useState, useEffect } from "react";

export default function Help() {
  const [post, setPost] = useState([]);

  //   useEffect(() => {
  //     // invalid url will trigger an 404 error
  //     axios
  //       .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
  //       .then((response) => {
  //         console.log(response.data.Data);
  //         setPost(response.data.Data.splice(0, 10));
  //       })
  //       .catch((error) => {
  //         setError(error);
  //       });
  //     return () => {};
  //   }, []);

  return <div className="Help"></div>;
}
