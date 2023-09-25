const onlyNumbers = async function (number_value, res, next) {
    if (isNumeric(number_value)) {
        return next()
    }
    else {
        return res.status(400).send('Data Integrity: Only numbers accepted')
    }
}


function isNumeric(num) {
    return !isNaN(num)
}

const minimunLenght = async function (string_value, res, next) {
    if (string_value.length > 3) {
        return next()
    }
    else {
        return res.status(400).send('Data Integrity: length is lower or equal to 3')
    }
}


module.exports = { onlyNumbers, minimunLenght }