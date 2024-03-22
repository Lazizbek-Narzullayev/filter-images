
const d=document.querySelector('#Default')
const Blur=document.querySelector('#Blur')
const Grayscale=document.querySelector('#Grayscale')
const Brightnees=document.querySelector('#Brightnees')
const Contrast=document.querySelector('#Contrast')
const Saturation=document.querySelector('#Saturation')
const Opacity=document.querySelector('#Opacity')
const HueRotate=document.querySelector('#Hue-Rotate')
const DropShadow=document.querySelector('#Drop-Shadow')
const Invert=document.querySelector('#Invert')
const img=document.querySelector('#img')
let buttons=document.querySelectorAll('button')

d.addEventListener("click", function(){
    img.style.filter="none";
})
Blur.addEventListener("click", function(){
    img.style.filter="blur(5px)"
})
Grayscale.addEventListener("click", function(){
    img.style.filter="grayscale(100%)"
})
Brightnees.addEventListener("click", function(){
    img.style.filter="brightness(0.4)"
})
Contrast.addEventListener("click", function(){
    img.style.filter="contrast(200%)"
})
Saturation.addEventListener("click", function(){
    img.style.filter="saturate(30%)"
})
Opacity.addEventListener("click", function(){
    img.style.filter="opacity(25%)"
})
HueRotate.addEventListener("click", function(){
    img.style.filter="hue-Rotate(90deg)"
})
DropShadow.addEventListener("click", function(){
    img.style.filter="drop-shadow(16px 16px 20px blue)"
    DropShadow.style.background="blue"
})
Invert.addEventListener("click", function(){
    img.style.filter="invert(75%)"
    Invert.style.background="blue"
})

buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        buttons.forEach(function(btn){
            btn.style.background="rgb(65, 65, 127)"
        })
        this.style.background="blue"
    })
})

document.addEventListener("click", function(event){
    if(!event.target.matches("button")){
        buttons.forEach(function(btn){
            btn.style.background="rgb(65, 65, 127)"
            img.style.filter="none"
        })
    }
})