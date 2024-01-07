import React from "react";
import { LifeList } from "../helpers/LifeList";
import LifeItem from "../components/LifeItem";
import "../styles/Life.css";

// link to 
// RecipeTrackingApp deploy website  - https://recipe-tracking-app-8b01.onrender.com
// Weather Observation - https://weather-observation-website.onrender.com
// Flashcard App - https://flashcard-app-ani1.onrender.com
// Local Libray - https://yl4322.github.io/Project-Two-LocalLib/
// ThinkfulCupid - https://my-second-webpage-design-using-css-html.vercel.app/



function Life() {
  return (
    <div className="life">
      <h1 className="lifeTitle">My Projects</h1>
      <div className="lifeList">
        {LifeList.map((lifeItem, key) => {
          return (
            <LifeItem
              key={key}
              image={lifeItem.image}
              name={lifeItem.name}
              description={lifeItem.description}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Life;
