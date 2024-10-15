document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value;
    const recipeDescription = document.getElementById('recipeDescription').value;
    const recipeImage = document.getElementById('recipeImage').files[0];
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Preview the recipe
    document.getElementById('previewName').textContent = recipeName;
    document.getElementById('previewDescription').textContent = recipeDescription;
    document.getElementById('previewIngredients').textContent = ingredients;
    document.getElementById('previewInstructions').textContent = instructions;

    // Display the uploaded image preview
    if (recipeImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('previewImage');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(recipeImage);
    }

    document.querySelector('.preview-section').style.display = 'block';
});