//Agregamos una clase para los elementos de media
//Con la finalidad de no tener al video que se va a reproducir embebido en la clase, es mejor pasar un objeto de configuración para leer al elemento que representa el Media
function MediaPlayer(config){
  this.media = config.el
  //Añadiendo plugins a traves de su objeto de configuración
  this.plugins = config.plugins || []

  //Se crea una función para iniciarlizar los plugins
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
}
//MediaPlayer necesita tener un método
//Cuando trabajamos con clases tenemos que añadir los métodos al prtotype
MediaPlayer.prototype.play = function(){
  this.media.play()
}
MediaPlayer.prototype.pause = function(){
  this.media.pause()
}

MediaPlayer.prototype.togglePlay = function(){
  if(this.media.paused){
    this.media.play()
  } else {
    this.media.pause()
  }
}

MediaPlayer.prototype.mute = function(){
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function(){
  this.media.muted = false
}

MediaPlayer.prototype.toggleAudio = function(){
  if(this.media.muted){
    this.media.muted = false
  } else {
    this.media.muted = true
  }
}

export default MediaPlayer