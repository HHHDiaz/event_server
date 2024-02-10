import { eventServer } from "./functions/components/eventSource.js";
import { $MAIN, ele } from "./functions/helpers/variables.js";

export function router() {

    const path = location.pathname
    $MAIN.innerHTML = ''

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    if (path == '/') {
        $MAIN.insertAdjacentElement('beforeend', ele('h1', 'title', 'Hola a todos...'))
        eventServer()
    }
}