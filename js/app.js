// Form Bindings
const hasValue = obj => obj.value && obj.value.length > 0

const applyFilledOut = cntrl =>
  hasValue(cntrl)
  ? cntrl.classList.add('filled-out')
  : cntrl.classList.remove('filled-out')

const formCntrls = Array.from(document.getElementsByClassName('form-control'))

formCntrls.forEach(cntrl => {
  applyFilledOut(cntrl)
  cntrl.addEventListener('focusout', () => applyFilledOut(cntrl))
})

// NavBar Bindings
const navbarToggle = document.getElementById('navigation_toggle')
const navigation = document.getElementById('navigation')

navbarToggle.onclick = () => navigation.classList.contains('navbar__items-collapse')
  ? navigation.classList.remove('navbar__items-collapse')
  : navigation.classList.add('navbar__items-collapse')

const getActiveNavBarItem = () => document.getElementsByClassName('navbar__item-active')[0]

const navBarItems = Array.from(document.getElementsByClassName('navbar__item'))

navBarItems.forEach(item => {
  item.onclick = () => {
    const activeItem = getActiveNavBarItem()
    activeItem.classList.remove('navbar__item-active')
    item.classList.add('navbar__item-active')
  }
})
