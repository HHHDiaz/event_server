import { router } from './js/main.js'

window.addEventListener('popstate', router)
document.addEventListener("DOMContentLoaded", router)