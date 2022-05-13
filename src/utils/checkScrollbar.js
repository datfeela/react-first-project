export const checkScrollbar = () => {
    if (document.body.clientWidth < window.innerWidth) {
        return true
    }
    return false
}