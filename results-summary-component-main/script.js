
  // Fetch JSON data
  fetch('./data.json')  // Assuming your JSON file is named data.json and is in the same directory
    .then(response => response.json())
    .then(data => {
    
    // Calculate the average score
      const averageScore = data.reduce((total, category) => total + category.score, 0) / data.length;

      // Update HTML elements with JSON data for the result section
      document.querySelector('.circle h3').textContent = Math.round(averageScore);  // Round to the nearest whole number
      document.querySelector('.circle p').textContent = `of 100`;
      
      // Update HTML elements with JSON data for the summary section
      const ratingBlocks = document.querySelectorAll('.rating .block');

      data.forEach((category, index) => {
        const categoryElement = ratingBlocks[index].querySelector('.category p');
        const scoreElement = ratingBlocks[index].querySelector('.score span');

        categoryElement.textContent = category.category;
        scoreElement.textContent = category.score;

        const iconElement = ratingBlocks[index].querySelector('.category img');
        iconElement.src = category.icon;
        iconElement.alt = category.category;
      });
    })
 
   