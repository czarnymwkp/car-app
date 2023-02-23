export const debounce = (func: () => void, wait: number) => {
    let timeout: any

    return function executedFunction(...args: []) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}