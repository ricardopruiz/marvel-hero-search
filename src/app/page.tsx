"use client";
import SectionTitle from "../components/SectionTitle";
import HeroesList from "../components/HeroesList";
import Searcher from "../components/Searcher";

const Page = () => {
  return (
    <div>
      <Searcher onChangeSearchText={() => {}} results={2} searchText="test" />
      <SectionTitle>FAVORITES</SectionTitle>
      <HeroesList
        heroes={[
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
          { id: 1 },
        ]}
      />
    </div>
  );
};

export default Page;
