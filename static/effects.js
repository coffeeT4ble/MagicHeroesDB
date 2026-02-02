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
      const src = `/static/images/effects/${effect.img}.png`
      img.src = src
      img.alt = effect.name
      imageCell.addEventListener("click", () => {detailedTable(effect, src)})

      imageCell.appendChild(img)
      imageRow.appendChild(imageCell)
    })
    table.appendChild(imageRow)
  }
  container.appendChild(table)
}

function detailedTable(effect, imageSrc) {
  const container = document.getElementById('content')
  container.classList.add('blurred')

  const overlay = document.createElement('div')
  overlay.className = 'effect-overlay'
  overlay.addEventListener('click', closeDetailedTable)
  
  const dTab = document.createElement('table')
  dTab.setAttribute('border', '5')
  dTab.className = 'effect-detailed-table'
  dTab.addEventListener('click', (e) => e.stopPropagation())

  const headerRow = document.createElement('tr')
  const header = document.createElement('th')
  header.className = 'effect-detailed-table-name'
  header.textContent = effect.name
  headerRow.appendChild(header)
  dTab.appendChild(headerRow)

  const imgRow = document.createElement('tr')
  const imgCell = document.createElement('td')
  imgCell.className = 'effect-detailed-table-image-cell'
  const image = document.createElement('img')
  image.className = 'effect-detailed-table-image'
  image.src = imageSrc
  image.alt = effect.name
  imgCell.appendChild(image)
  imgRow.appendChild(imgCell)
  dTab.appendChild(imgRow)

  const descRow = document.createElement('tr')
  const desc = document.createElement('td')
  desc.className = 'effect-detailed-table-desc'
  desc.style.whiteSpace = 'pre-line'
  desc.textContent = effect.description
  descRow.appendChild(desc)
  dTab.appendChild(descRow)

  overlay.appendChild(dTab)
  document.body.appendChild(overlay)
}

function closeDetailedTable() {
  const container = document.getElementById('content')
  container.classList.remove('blurred')

  const overlay = document.querySelector('.effect-overlay')
  if(overlay){
    overlay.remove()
  }
}
