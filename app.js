const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector("ajax-section ul.cities")

// localStorage.setItem("tokenKeyEncrypted",EncryptStringAES("2ca4f35d37fd69c61ebe1ba90aad25a7"))
//key ismi ile value kısmını o fonksiyonu kullanarak valueyı şifrelenmiş bir şekilde localstorage e gönderdik.👆ve orda bize verilen şifreyi alttaki kalıba koyduk 👇

localStorage.setItem("tokenKey","37Wwhxn5xjUAu4KoD8rXpEEVZO74BSfc8jAg/FlDSmLgj3UxguKIBGWVD8Qz58lh")
form.addEventListener("submit",()=>{
    getWeatherDataFormApi();
})

const getWeatherDataFormApi = async()=>{
    const tokenKey = DecryptStringsAES(localStorage.getItem("tokenKey"));
    const inputValue = input.value ;
    const units = "metric"
    const lang = "tr"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;
    try {
    const response = await axios(url)
    console.log(response)
} catch (error) {
    console.log(error)
    
}

}
//verileri üstteki fonksiyon ile çekeceğiz ve form submit içinde çalıştıracağız tıklandığında çalışssın diye.



