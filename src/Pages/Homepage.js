import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import News from "../components/News/News";

const Homepage = () => {
  return (
    <>
      <Banner />
      <News />
      <CoinsTable />
    </>
  );
};

export default Homepage;
