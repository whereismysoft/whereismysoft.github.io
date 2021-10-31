function detectPlatfrom() {
    const isTouch = (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));

    return isTouch ? 'touch' : 'desktop'

}