"use client";
import Searcher from "../components/Searcher";

const Page = () => {
  return (
    <div>
      <Searcher onChangeSearchText={() => {}} results={2} searchText="test" />
    </div>
  );
};

export default Page;
