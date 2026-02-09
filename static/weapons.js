document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('content')
  loadWeapons(container)
})

async function loadWeapons(container){
  try {
    const response = await fetch('/api/weapons')
    const weapons = await response.json()
    displayWeapons(weapons, container)
  } catch (error) {
    const errorPara = document.createElement('p')
    errorPara.textContent = 'Error loading Weapons: ' + error.message
    container.innerHTML = ''
    container.appendChild(errorPara)
  }
}

function displayWeapons(weapons, container) {
  container.innerHTML = ''

  const table = document.createElement('table')
  table.setAttribute('border', '3')
  table.className = 'weapons-table'

  for (let i = 0; i < weapons.length; i+=3) {
    const rowWeapons = weapons.slice(i, i + 3)

    const imgRow = document.createElement('tr')
    rowWeapons.forEach(weapon => {
      const imgCell = document.createElement('td')
      imgCell.setAttribute('colspan', '6')
      imgCell.className = 'weapon-image-cell'

      const img = document.createElement('img')
      img.className = 'weapon-image'
      const src = `/static/images/weapons/${weapon.img}.png`
      img.src = src
      img.alt = weapon.name
      // event listener

      imgCell.appendChild(img)
      imgRow.appendChild(imgCell)
      loadEffects(table, weapon)
    })
    table.appendChild(imgRow)
  }
  container.appendChild(table)
}

async function loadEffects(table, weapon){
  try{
    const response = await fetch('/api/effects')
    const effects = await response.json()
    displayEffects(effects, table, weapon)
  } catch (error) {
    console.log("no effects :(")
  }
}

function displayEffects(effects, table, weapon){
   const numRow = document.createElement('tr')
  for(let i = 0; i < 3; i++){
    const numCell = document.createElement('td')
    numCell.setAttribute('colspan', '2')
    numCell.textContent = i+1
    numRow.appendChild(numCell)
  }
  table.appendChild(numRow)
}
