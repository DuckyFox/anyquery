export function debounce(func, wait = 300, immediate = false) {
    let timeout

    return function executedFunction(...args) {
        const later = () => {
            timeout = null
            if (!immediate) func(...args)
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) func(...args)
    }
}
