//Se crea la carpeta de plugins en donde creamos el archivo de AutoPlay para crear esa function y exportarla al Media player como uno de sus objetos de configuración

function AutoPlay(){}
AutoPlay.prototype.run = function(player){
  player.mute()
  player.play()
}

export default AutoPlay