document.addEventListener('DOMContentLoaded', function() {
  const resultsContainer = document.getElementById('results')
  
  document.getElementById('loadEffects').addEventListener('click', function() {
    loadEffects(resultsContainer);
  });
  async function loadEffects(container) {
    try {
      const response = await fetch('/api/effects');
      const effects = await response.json();
      displayEffects(effects, container);
    } catch (error) {
      container.innerHTML = '<p>Error loading effects: ' + error.message + '</p>';
    }
  }

  function displayEffects(effects, container) {
    let html = '<h3>Effects</h3><table border="1"><tr><th>Name</th><th>Image</th><th>Description</th></tr>';
    effects.forEach(effect => {
      html += `<tr><td>${effect.name}</td><td><img src="/static/images/effects/${effect.img}.png" alt="${effect.name}"></td><td>${effect.description}</td></tr>`;
    });
    html += '</table>';
    container.innerHTML = html;
  }

});
