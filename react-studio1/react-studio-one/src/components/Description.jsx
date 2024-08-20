import React from "react";
import styles from "./Description.module.css";

const RecipeAuthor = () => {
    let authorLink = "https://www.food.com/recipe/traditional-peanut-butter-and-jelly-243965#reviews";
    let authorPhoto = "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_48,ar_1:1/v1/gk-static/gk/img/avatar/burger.png";
    let authorName = "gourmetmomma";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Peanutbutter and Jelly Gore" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Traditional Peanutbutter & Jelly Recipe for Beginners</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
       <div>
          <h1>Traditional Peanutbutter & Jelly for Eternal Bachelors</h1>
          <p>Put the stuff between the bread and flush it down with milk</p>
       </div>
       <RecipeAuthor />
    </div>
        );
    }
    }

    export default RecipeDescription;
    