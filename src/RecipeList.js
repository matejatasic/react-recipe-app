import React, {Component} from "react";
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        return (
            <div>
              {this.props.recipes.map((recipe, i) => {
                  return <Recipe key={i} recipe={recipe} />
              })}  
            </div>
        );
    }
}