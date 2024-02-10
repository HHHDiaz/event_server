export function eventServer() {
    let eventSource = new EventSource('/sendServer')
    eventSource.addEventListener('message', e => {
        try {
            console.log(e.data)
        } catch (err) {

        }
    })
}