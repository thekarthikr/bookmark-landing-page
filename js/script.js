const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.tab-panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')
const navLink = document.querySelectorAll('.nav-link')


tabs.forEach((tab) => tab.addEventListener('click', onTabClick))


btn.addEventListener('click', navToggle)

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  panels.forEach((panel) => panel.classList.add('hidden'))


  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}

function activeLink(){
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  btn.classList.remove('open');
  logo.setAttribute('src', './images/logo-bookmark.svg')
  }
  
  navLink.forEach(n => n.addEventListener('click', activeLink));
  