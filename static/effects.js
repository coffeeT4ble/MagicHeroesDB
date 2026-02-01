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
    const errorPara = document.createElement('p')
    errorPara.textContent = 'Error loading effects: ' + error.message
    container.innerHTML = ''
    container.appendChild(errorPara)
  }
}

function displayEffects(effects, container) {
  container.innerHTML = ''

  const table = document.createElement('table')
  table.setAttribute('border', '3')
  table.className = 'effects-table'

  for (let i = 0; i < effects.length; i+=3) {
    const rowEffects = effects.slice(i, i + 3)

    const headerRow = document.createElement('tr')
    rowEffects.forEach(effect => {
      const headerCell = document.createElement('th')
      headerCell.className = 'effect-header-cell'
      headerCell.textContent = effect.name
      headerRow.appendChild(headerCell)
    })
    table.appendChild(headerRow)

    const imageRow = document.createElement('tr')
    rowEffects.forEach(effect => {
      const imageCell = document.createElement('td')
      imageCell.className = 'effect-image-cell'
      
      const img = document.createElement('img')
      img.className = 'effect-image'
      img.src = `/static/images/effects/${effect.img}.png`
      img.alt = effect.name

      imageCell.appendChild(img)
      imageRow.appendChild(imageCell)
    })
    table.appendChild(imageRow)

    const descRow = document.createElement('tr')
    rowEffects.forEach(effect => {
      const descCell = document.createElement('td')
      descCell.className = 'effect-desc-cell'
      descCell.style.whiteSpace = 'pre-line'
      descCell.textContent = effect.description
      descRow.appendChild(descCell)
    })
    table.appendChild(descRow)
  }
  container.appendChild(table)
}
