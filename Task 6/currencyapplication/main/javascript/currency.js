const apiKey = "cur_live_ow9Pa3TmOuBVNDXL9ywrYu462uWtAx9cOm4i8OY8";
const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=";

const convertBtn = document.querySelector(".convertBtn");

async function convertCurrency(from, to, money){
    const response = await fetch (apiUrl + apiKey + `&currencies=${to}` + `&base_currency=${from}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".converted").style.display = "none";
    } else {
        var data = await response.json();
        var convertCourse = parseFloat(data.data[to].value.toFixed(2));
        var convertResult = parseFloat((money * convertCourse).toFixed(2));

        var convertedContainer = document.querySelector('.converted');

        var resultHeading = document.createElement('h2');
        var resultText = `${money} ${from} converted to ${to} by current course (${convertCourse})= ${convertResult}`;
        resultHeading.textContent = resultText;

        convertedContainer.appendChild(resultHeading);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".converted").style.display = "block";
    }
}

convertBtn.addEventListener("click", () => {
    const convertFrom = document.getElementById("fromCur").value;
    const convertTo = document.getElementById("toCur").value;
    const amount = document.querySelector(".amount").value;

    if(amount != null){
        convertCurrency(convertFrom, convertTo, amount);
    }
})