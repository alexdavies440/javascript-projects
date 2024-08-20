import React from "react";
import styles from "./Description.module.css";

const RecipeAuthor = () => {
    let authorLink = "https://www.food.com/recipe/traditional-peanut-butter-and-jelly-243965#reviews";
    let authorPhoto = "https://i.insider.com/65aecfe9617029e90a5f3c7f?width=700";
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
          </div>
          <RecipeAuthor />
          <div>
            <p>Today we are going to learn how to make a peanutbutter and jelly sandwich the old-fashioned way, from scratch. If you follow these directions carefully, you too can be the owner of a new peanutbutter and jelly sandwich! If at any point, you get lost, seek help. If at any point you choke, just keep adding milk!</p>
          <p>Put the stuff between the bread and flush it down with milk</p>
       </div>
       
    </div>
        );
    }
    }

    export default RecipeDescription;
    