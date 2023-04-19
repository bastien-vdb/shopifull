import React from "react";

async function fetcher() {
  const res = 
  await fetch("http://localhost:3000/api/get")
  .then(res=>{return res.json()})
  .catch(error=>console.log(error))
  return res;
  
  //   return fetch("http://localhost:3000/api/get").then((res) => res.json());
}

export default fetcher;
