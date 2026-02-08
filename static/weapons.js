document.addEventLister('DOMContentLoaded', function(){
  const container = document.getElementById('content')
  loadWeapons(container)
})

async function loadWeapons(container){
  try {
    const response = await fetch('/api/weapons')
    const effects = await response.json()
    displayWeapons(effects, container)
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
      imgCell.setAttribute('colspan', '3')
      
    })
  }
}

async function loadEffects(){
  try{
    const response = await fetch('/api/effects')
  }
}
