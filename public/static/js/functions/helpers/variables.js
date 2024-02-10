export const d = document
export const $ = (h) => d.querySelector(h)
export const $All = (h) => d.querySelectorAll(h)
export const $C = (h) => d.createElement(h)
export const $MAIN = $('.main')

export function ele(el, cl, tx) {
    const $ELE = d.createElement(el)
    $ELE.classList.add(cl)
    tx ? $ELE.textContent = tx : null
    return $ELE
}

export function img(sr, al, cl) {
    const $IMG = d.createElement('img')
    $IMG.setAttribute('src', sr)
    $IMG.setAttribute('alt', al)
    $IMG.classList.add(cl)
    return $IMG
}

export function label(fr, tx) {
    const $LABEL = d.createElement('label')
    $LABEL.setAttribute('for', fr)
    $LABEL.textContent = tx
    return $LABEL
}

export function input(tp, nm, cl, ph, vl, rq, pt, tl) {
    const $INPUT = d.createElement('input')
    $INPUT.setAttribute('class', cl)
    $INPUT.setAttribute('type', tp)
    $INPUT.setAttribute('value', vl)
    tl ? $INPUT.setAttribute('title', tl) : null
    pt ? $INPUT.setAttribute('patter', pt) : null
    nm ? $INPUT.setAttribute('name', nm) : null
    ph ? $INPUT.setAttribute('placeholder', ph) : null
    rq ? $INPUT.setAttribute('required', rq) : null
    return $INPUT
}