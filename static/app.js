document.addEventListener('DOMContentLoaded', function() {
  const resultsDiv = document.getElementById('results')

  document.getElementById('loadEffects').addEventListener('click', loadEffects)

  async function loadEffects(){
    try {
      const response = await fetch('/api/effects')
      const effects = await response.json()
      displayEffects(effects)
    } catch (error) {
      resultsDiv.innerHTML = '<p>Loading effects: ' + error.message + '</p>'
    }
  }

  function displayEffects(effects) {
    let html = '<h3>Effects</h3><table border="1"><tr><th>NAME</th><th>DESCRIPTION</th></tr>'
    effects.forEach(effect => {
      html += `<tr><td>${effect.name}</td><td>${effect.description}</td></tr>`
    });
    html += '</table>'
    resultsDiv.innerHTML(html)
  }
  
});
