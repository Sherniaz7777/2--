const input=document.querySelector('input')
const h1=document.querySelector('h1')

const coddor=[
    {nomer:'+996', country:'Kyrgyzstan', img:`https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg`},
    {nomer:'+7', country:'Russian', img:`https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg` },
    {nomer:'+54', country:'Argentina', img:`https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg`},
    {nomer:'+965', country:'Kuwait', img:`https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg`},
    {nomer:'+974', country:'Qatar', img:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png`},
    {nomer:'+966', country:'Saudi Arabia', img:`https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg`},
    {nomer:'+90', country:'Turkey', img:`https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg` },
    {nomer:'+81', country:'Japan', img:`https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg` },
    {nomer:'+82', country:'South Korea', img:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png` },
    {nomer:'+91', country:'India', img:`https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg` },
    {nomer:'+92', country:'Pakistan', img:`https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg` },
]
function flag(coddor){
    h1.innerHTML=''
    for (const phone of coddor) {
        h1.innerHTML+=`
            <h4>${phone.nomer}</h4>
            <p>${phone.country}</p>
            <img width='700px' src='${phone.img}' />
      `   
    }
}

input.onchange=()=>{
    phoncode=coddor.filter(code=>code.nomer===input.value)
    flag(phoncode)
}
