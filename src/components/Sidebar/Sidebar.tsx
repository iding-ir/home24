import React, { useContext } from "react";

import { ArticlesContext } from "../../hooks/useArticles";

const Sidebar = () => {
  const { categories } = useContext(ArticlesContext);

  return (
    <div className={"sidebar"}>
      <h3>Kategorien</h3>
      {categories.length ? (
        <ul>
          {categories[0].childrenCategories.map(({ name, urlPath }) => {
            return (
              <li>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Sidebar;
