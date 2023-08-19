const menuItems = document.querySelectorAll('.menu-item')
const messagesNotification = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#search-message')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
const colorPlattes = document.querySelectorAll('.choose-color span')
const bgPlattes = document.querySelectorAll('.choose-bg div')
const root = document.querySelector(':root')

// remove active class from all menu-items
const removeMenuItemActiveClass = () => {
  menuItems.forEach((menu) => {
    menu.classList.remove('active')
  })
}

menuItems.forEach((menu) => {
  menu.addEventListener('click', () => {
    removeMenuItemActiveClass()
    menu.classList.add('active')
    if (menu.id === 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'block'
      document.querySelector('.notification-count').style.display = 'none'
      messagesNotification.querySelector('.notification-count').style.display =
        'block'
    } else {
      document.querySelector('.notifications-popup').style.display = 'none'
      document.querySelector('.notification-count').style.display = 'block'
    }
  })
})

messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)'
  messagesNotification.querySelector('.notification-count').style.display =
    'none'

  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000)
})

const filterChat = () => {
  let text = messageSearch.value.toLowerCase()
  message.forEach((msg) => {
    let name = msg.querySelector('h5').textContent.toLowerCase()
    console.log(name)
    if (name.indexOf(text) != -1) {
      msg.style.display = 'flex'
    } else {
      msg.style.display = 'none'
    }
  })
}

messageSearch.addEventListener('keyup', filterChat)

const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)

const removeSizeActiveClass = () => {
  fontSizes.forEach(function (size) {
    size.classList.remove('active')
  })
}

fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSizeActiveClass()
    size.classList.add('active')
    let fontSize
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
      root.style.setProperty('--sticky-top-left', '-2rem')
      root.style.setProperty('--sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('--sticky-top-left', '-5rem')
      root.style.setProperty('--sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px'
      root.style.setProperty('--sticky-top-left', '-12rem')
      root.style.setProperty('--sticky-top-right', '-35rem')
    }
    document.querySelector('html').style.fontSize = fontSize
  })
})

const removeColorActiveClass = () => {
  colorPlattes.forEach(function (color) {
    color.classList.remove('active')
  })
}

const removeBgActiveClass = () => {
  bgPlattes.forEach(function (color) {
    color.classList.remove('active')
  })
}

colorPlattes.forEach((color) => {
  color.addEventListener('click', () => {
    removeColorActiveClass()
    color.classList.add('active')
    let primaryColor
    if (color.classList.contains('color-1')) {
      primaryColor = 252
    } else if (color.classList.contains('color-2')) {
      primaryColor = 52
    } else if (color.classList.contains('color-3')) {
      primaryColor = 352
    } else if (color.classList.contains('color-4')) {
      primaryColor = 152
    } else if (color.classList.contains('color-5')) {
      primaryColor = 202
    }
    root.style.setProperty('--color-primary-hue', primaryColor)
  })
})

bgPlattes.forEach((color) => {
  color.addEventListener('click', () => {
    removeBgActiveClass()
    color.classList.add('active')
    let lightColorLightness, whiteColorLightness, darkColorLightness
    if (color.classList.contains('bg-1')) {
      darkColorLightness = '17%'
      whiteColorLightness = '100%'
      lightColorLightness = '95%'
    } else if (color.classList.contains('bg-2')) {
      darkColorLightness = '95%'
      whiteColorLightness = '20%'
      lightColorLightness = '15%'
    } else if (color.classList.contains('bg-3')) {
      darkColorLightness = '95%'
      whiteColorLightness = '10%'
      lightColorLightness = '0%'
    }
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
  })
})
