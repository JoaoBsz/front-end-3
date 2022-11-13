
export const selectIsEmpty = (inputSelect) => {
    let error = false

    if (inputSelect === "") {
        error = true
    }

    return error
 }

export const isEmpty = (inputDescription) => {
    let error = false

    if (inputDescription === "") {
        error = true
    }

    return error
 }

export const maxCaracter = (inputDescription) => {
    let error = false

    if (inputDescription > 60){
        error = true
    }

    return error
}
