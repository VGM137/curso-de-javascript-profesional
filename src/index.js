import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

//Multimedia shit
let video = document.getElementById('video-michoacan')
/* video.querySelector('video') */
let buttonPlay = document.getElementById('play-pause')
let buttonAudio = document.getElementById('mute-unmute')

/* //Agregamos una clase para los elementos de media
//Con la finalidad de no tener al video que se va a reproducir embebido en la clase, es mejor pasar un objeto de configuración para leer al elemento que representa el Media
function MediaPlayer(config){
  this.media = config.el
}
//MediaPlayer necesita tener un método
//Cuando trabajamos con clases tenemos que añadir los métodos al prtotype
MediaPlayer.prototype.play = function(){
  if(this.media.paused){
    this.media.play()
  } else {
    this.media.pause()
  }
} */
//Ya no se le va a dar play al video directamente desde la función del boton, sino que generarémos un player con el método .play
// para ello instanciamos al player y le pasamos el objeto de configuración que se va a reproducir con el método de la función:
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })
buttonPlay.onclick = () => player.togglePlay()
buttonAudio.onclick = () => player.toggleAudio()


//Responsive shit
const menu = document.querySelector(".menu")
const burgerButton = document.querySelector("#burger-menu")
const ipad = window.matchMedia("screen and (max-width: 767px)")

/* ipad.addEventListener(validation); */

/*         console.log(ipad) */

function validation(event){
  if(event.matches) {
    burgerButton.addEventListener("click", hideShow)
  }
  else {
    burgerButton.removeEventListener("click", hideShow)
  }
}
validation(ipad);

function hideShow(){
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
  }
  else {
    menu.classList.add("is-active")
  }
}