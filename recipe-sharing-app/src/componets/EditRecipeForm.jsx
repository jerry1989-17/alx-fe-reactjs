
import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const { id, title: initialTitle, description: initialDescription } = recipe;
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
