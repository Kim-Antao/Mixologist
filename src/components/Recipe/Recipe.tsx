import './Recipe.scss';
import { Drink } from '../../types/drink';

type RecipeProps = {
  recipe: Drink;
  ingredientsWithMeasurements: {[index: string]:string};
}

const Recipe = ({recipe, ingredientsWithMeasurements}:RecipeProps) => {

  return  (
    <div className='recipe__outer-container'>
      <div className='recipe__container'>
        <h2 className='recipe__heading'>{recipe.strDrink}</h2>
        <img className='recipe__image' src={recipe.strDrinkThumb} alt="" />
        <div className='recipe__inner-container'>
          <div className='recipe__content recipe__content--flex'>
            <h4 className='recipe__sub-heading'>Type</h4>
            <p>{`: ${recipe.strAlcoholic}`}</p>
          </div>
          <div className='recipe__content recipe__content--flex'>
            <h4 className='recipe__sub-heading'>Category</h4>
            <p>{`: ${recipe.strCategory}`}</p>
          </div>
          <br />
          <div className='recipe__content'>
            <h4 className='recipe__sub-heading'>Ingredients</h4>
            {
            Object.keys(ingredientsWithMeasurements).map((key,index)=>{
              return <p key={index}> {key} - {ingredientsWithMeasurements[key]}</p>
            })
          } 
          </div>
          <br />
          <div className='recipe__content'>
            <h4 className='recipe__sub-heading'>Instructions</h4>
            <p> {recipe.strInstructions}</p>
          </div>
          <br />
          <div className='recipe__content recipe__content--flex'>
            <h4 className='recipe__sub-heading'>Glass Used:</h4>
            <p>{`: ${recipe.strGlass}`}</p>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Recipe