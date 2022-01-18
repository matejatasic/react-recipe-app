import React, {Component} from "react";
import { v4 as uuid } from 'uuid';

export default class Recipe extends Component {
    render() {
        return (
            <div className="recipe-card">
                <img src={this.props.recipe.recipe.image} alt="recipe" />
                <h3>{this.props.recipe.recipe.label}</h3>
                <p><strong>Calories</strong>: {this.props.recipe.recipe.calories}</p>
                <h4>Ingredients</h4>
                <ul>
                    {this.props.recipe.recipe.ingredients.map(ingredient => {
                        return <li key={uuid()}>{ingredient.text}</li>
                    })}
                </ul>
            </div>
        )
    }
}