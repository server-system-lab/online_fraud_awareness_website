import './style.css'

const year = document.getElementById('ano')

if (year) {
  year.textContent = new Date().getFullYear()
}