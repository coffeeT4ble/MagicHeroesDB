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
      const effect = loadEffectById(3)
      console.log("test" + effect.img)
      // event listener

      imgCell.appendChild(img)
      imgRow.appendChild(imgCell)
    })
    table.appendChild(imgRow)
  }
  container.appendChild(table)
}



async function loadEffectById(id){
  try{
    const response = await fetch(`/api/effects/${id}`)
    if (!response.ok){
      throw new Error('Effect not found')
    }
    const effect = await response.json()
    return effect
  } catch (error) {
    console.log("no effect found :(")
    return null
  }
}

/*function displayEffects(effects, table, weapon){
  const topNumRow = document.createElement('tr')
  for(let i = 0; i < 3; i++){
    const topNumCell = document.createElement('td')
    topNumCell.setAttribute('colspan', '2')
    topNumCell.textContent = i+1
    topNumRow.appendChild(topNumCell)
  }
  table.appendChild(topNumRow)

  const topEffectIds = []
  topEffectIds.push(weapon.e_1_id, weapon.e_2_id, weapon.e_3_id)
  const topEffectsNums = []
  topEffectNums.push(weapon.e_1_num, weapon.e_2_num, weapon.e_3_num)
  const topImgRow = document.createElement('tr')
  for(i = 0; i < 3; i++){
    const topEffectNum = document.createElement('td')
    
  }
}*/
