// Fetching the JSON data
fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    let words = data.vocabulary; // Store the words from the JSON

    let currentIndex = 0; // Track the current word

    // Get elements from the DOM
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const toggleDefinitionButton = document.getElementById('toggleDefinition');
    const changeWordButton = document.getElementById('changeWord');

    // Function to display a new word
    function displayWord() {
      const wordData = words[currentIndex];
      wordElement.textContent = wordData.word;
      definitionElement.textContent = wordData.definition;
    }

    // Show the first word on page load
    displayWord();

    // Toggle the definition visibility
    toggleDefinitionButton.addEventListener('click', () => {
      definitionElement.classList.toggle('hidden');
      if (definitionElement.classList.contains('hidden')) {
        toggleDefinitionButton.textContent = 'Show Definition';
      } else {
        toggleDefinitionButton.textContent = 'Hide Definition';
      }
    });

    // Change to a new word when the button is clicked
    changeWordButton.addEventListener('click', () => {
      currentIndex = Math.floor(Math.random() * (words.length + 1));//(currentIndex + 1) % words.length; // Cycle through the words
      displayWord();
      definitionElement.classList.add('hidden'); // Hide the definition when the word changes
      toggleDefinitionButton.textContent = 'Show Definition';
    });
  })
  .catch(error => {
    console.error('Error loading words:', error);
  });
