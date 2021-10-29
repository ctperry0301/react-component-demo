import './App.css';
import Recipe from './components/recipe';
import recipes from './data';

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <h1>Coles Concoctions</h1>
      {recipes.map(recipe => 
        <Recipe 
          name={recipe.name}
          img={recipe.imageSrc}
          desc={recipe.description}
        />
      )};
    </div>
  );
}

export default App;
