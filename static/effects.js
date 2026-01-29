document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('content')
  loadEffects(container)
});

async function loadEffects(container){
  try{
    const response = await fetch('/api/effects')
    const effects = await response.json()
    displayEffects(effects, container)
  } catch (error) {
    container.innerHTML = '<p>Error loading effects: ' + error.message + '</p>'
  }
}

function displayEffects(effects, container){
  let html = '<table border="1"'
  effects.forEach(effect => {
    html += `<tr><th>${effect.name}</th></tr>`
    const imgSrc = `/static/images/effects/${effect.img}.png`
    html += `<tr><td class="effect-image-cell"><img src="${imgSrc}" alt="${effect.name}"></td></tr>`
    html += `<tr><td>${effect.description}</td></tr>`
  });
  html += '</table>'
  container.innerHTML = html
}
