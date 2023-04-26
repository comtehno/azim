

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").innerHTML = ''
    document.querySelector("h1").innerHTML += "elAMAN"
})

const arr = ["elemanchilk", "Ilya", "Alymbek"]

document.querySelector("h1").innerHTML = ''


for (let i = 0; i < 3; i++ ) {
    document.querySelector("h1").innerHTML += arr[i]
    document.querySelector("ul").innerHTML += "<li>" + arr[i] + "</li>"
    console.log(arr[i])
}
