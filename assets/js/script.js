const getLeap = (Year) => {
    if (Year % 4 === 0) {
        if (Year % 100 === 0) {
            if (Year % 400 === 0) {
                return `Leap Year`
            } else {
                return `Not A Leap Year`
            }
        } else {
            return `Leap Year`
        }
    } else {
        return `Not A Leap Year`
    }
}

document.getElementById("inputGroupPrepend2").addEventListener('click', function(e) {
    document.getElementById("yearSet").innerHTML = document.getElementById("yearGetter").value
    document.getElementById("resultSet").innerHTML = getLeap(document.getElementById("yearGetter").value)
})

document.getElementById("copyTxtCon").addEventListener('click', function(e) {
    window.open('https://lexuscreations.herokuapp.com/', '_blank')
})