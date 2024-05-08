import { useCallback, useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default News;
