document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('content')
  loadWeapons(container)
})

async function loadWeapons(container){
  try {
    const response = await fetch('/api/weapons')
    const weapons = await response.json()
    await displayWeapons(weapons, container)
  } catch (error) {
    const errorPara = document.createElement('p')
    errorPara.textContent = 'Error loading Weapons: ' + error.message
    container.innerHTML = ''
    container.appendChild(errorPara)
  }
}

async function displayWeapons(weapons, container) {
  container.innerHTML = ''

  const table = document.createElement('table')
  table.setAttribute('border', '3')
  table.className = 'weapons-table'

  for (let i = 0; i < weapons.length; i += 3) {
    const rowWeapons = weapons.slice(i, i + 3)

    const imgRow = document.createElement('tr')
    const rowPromises = rowWeapons.map(async (weapon) => {
      const imgCell = document.createElement('td')
      imgCell.setAttribute('colspan', '6')
      imgCell.className = 'weapon-image-cell'

      const img = document.createElement('img')
      img.className = 'weapon-image'
      const src = `/static/images/weapons/${weapon.img}.png`
      img.src = src
      img.alt = weapon.name

      imgCell.appendChild(img)
      imgRow.appendChild(imgCell)
      table.appendChild(imgRow)
      await effectRows(weapon, table)
    })

    await Promise.all(rowPromises)
    //table.appendChild(imgRow)
  }

  container.appendChild(table)
}

async function getEffect(id) {
  try {
    const response = await fetch(`/api/effects/${id}`)
    if (!response.ok) throw new Error('Effect not found')
    const effect = await response.json()
    return effect
  } catch (error) {
    console.error(`Could not get img for effect ${id}:`, error.message)
    return null
  }
}

async function effectRows(weapon, table) {
  const imgArray = [
    weapon.e_1_id,
    weapon.e_2_id,
    weapon.e_3_id,
    weapon.e_4_id,
    weapon.e_5_id,
    weapon.e_6_id
  ]
  const idArray = [
    weapon.e_1_num,
    weapon.e_2_num,
    weapon.e_3_num,
    weapon.e_4_num,
    weapon.e_5_num,
    weapon.e_6_num
  ]
  const numRowOne = document.createElement('tr')
  const rowOne = document.createElement('tr')
  for(let i = 0; i < 3; i++){
    const numRowNum = document.createElement('td')
    numRowNum.setAttribute('colspan', '2')
    numRowNum.className = 'weapon-effect-row-num'
    numRowNum.textContent = i + 1

    const numCell = document.createElement('td')
    numCell.className = 'weapon-effect-num-cell'
    numCell.textContent = idArray[i]

    const imgCell = document.createElement('td')
    const img = document.createElement('img')
    const imgName = await getEffect(imgArray[i])
    const src = `/static/images/effects/${imgName.img}.png`
    img.src = src
    img.alt = imgName

    numRowOne.appendChild(numRowNum)
    rowOne.appendChild(numCell)
    imgCell.appendChild(img)
    rowOne.appendChild(imgCell)
  }
  table.appendChild(numRowOne)
  table.appendChild(rowOne)

  const numRowTwo = document.createElement('tr')
  const rowTwo = document.createElement('tr')
  for(let i = 3; i < 6; i++){
    const numRowNum = document.createElement('td')
    numRowNum.setAttribute('colspan', '2')
    numRowNum.className = 'weapon-effect-row-num'
    numRowNum.textContent = i + 1

    const numCell = document.createElement('td')
    numCell.className = 'weapon-effect-num-cell'
    numCell.textContent = idArray[i]

    const imgCell = document.createElement('td')
    const img = document.createElement('img')
    const imgName = await getEffect(imgArray[i])
    const src = `/static/images/effects/${imgName.img}.png`
    img.src = src
    img.alt = imgName

    
    numRowTwo.appendChild(numRowNum)
    rowTwo.appendChild(numCell)
    imgCell.appendChild(img)
    rowTwo.appendChild(imgCell)
  }
  table.appendChild(numRowTwo)
  table.appendChild(rowTwo)
}
