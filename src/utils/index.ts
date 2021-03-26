import { useEffect, useState } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value

export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(result).forEach((key: string) => {
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })

    return result
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = <D>(value: D, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])


    return debounceValue
}