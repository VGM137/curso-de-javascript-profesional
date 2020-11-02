function Comida(nombre) {
  this.nombre = nombre
}

let chicharron = new Comida('Chicharrón')
let suadero = new Comida('Suadero')
let rajas = new Comida('Rajas')

let menu = []
  let comidas = menu.push(chicharron, suadero, rajas)




  
  
  function Servicio(){
    const orden1 = new Orden({ el1: this.opcionBox1, el2: this.opcionBox2, el3: this.opcionBox3, el4: this.opcionBox4 })
    this.arrayDeFormularios = []
  }
  Servicio.prototype.formularios = function(){
    
    const cuentaDeFormularios = () => {
      var formularios = 0
      const countForms = (orden) => {
      formularios += orden
      this.arrayDeFormularios.push(formularios)
      console.log(formularios)
    }
    return countForms
  }
  let miCuentaDeFormularios = cuentaDeFormularios()
  miCuentaDeFormularios(1)
  }
  Servicio.prototype.miCuenta = function (){
    Servicio.prototype.formularios()
  }
  Servicio.prototype.insertarFormulario = function () {
    const ordenNueva = Servicio.prototype.orden()
    ordenNueva()
  }
  Servicio.prototype.push = function(){
    this.arrayDeFormularios.push() 
  }

  function Orden(){
    Orden.prototype.orden()
/*     this.verif1 = config.el1
    this.verif2 = config.el2
    this.verif3 = config.el3
    this.verif4 = config.el4 */
  }
  Orden.prototype.orden = function () {
    let last = 1
    this.agregarOrden = document.getElementById('agregarOrden')
    this.menu = document.getElementById('menu')
    this.elegir = document.createElement('fieldset')
    this.elegir.id = `elegir${last}`
    this.elegir.classList.add(`elegir`)
    this.menu.insertBefore(this.elegir, this.agregarOrden)
      this.avisoTacos = document.createElement('div')
      this.avisoTacos.id = `avisoTacos${last}`
      this.avisoTacos.classList.add('avisoTacos')
      this.elegir.appendChild(this.avisoTacos)
        this.textoTacos = document.createElement('p')
        this.textoTacos.id = `textoTacos${last}`
        this.textoTacos.classList.add('textoTacos')
        this.avisoTacos.appendChild(this.textoTacos)
      this.platillos = document.createElement('section')
      this.platillos.id = `platillos${last}`
      this.platillos.classList.add('platillos')
      this.elegir.appendChild(this.platillos)
        this.box = document.createElement('form')
        this.box.id = `box${last}`
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion1 = document.createElement('label')
          this.opcion1.id = `opcion1 ${last}`
          this.opcion1.classList.add('opcion')
          this.box.appendChild(this.opcion1)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = `opcion1Input ${last}`
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)
        this.box = document.createElement('form')
        this.box.id = 'box'
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion2 = document.createElement('label')
          this.opcion2.id = `opcion2 ${last}`
          this.opcion2.classList.add('opcion')
          this.box.appendChild(this.opcion2)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = `opcion2Input ${last}`
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)
        this.box = document.createElement('form')
        this.box.id = 'box'
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion3 = document.createElement('label')
          this.opcion3.id = `opcion3 ${last}`
          this.opcion3.classList.add('opcion')
          this.box.appendChild(this.opcion3)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = `opcion3Input ${last}`
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)
      this.avisoCheck = document.createElement('div')
      this.avisoCheck.id = `avisoCheck${last}`
      this.avisoCheck.classList.add('avisoCheck')
      this.elegir.appendChild(this.avisoCheck)
        this.textoCheck = document.createElement('p')
        this.textoCheck.id = `textoTacos${last}`
        this.textoCheck.classList.add('textoTacos')
        this.avisoCheck.appendChild(this.textoCheck)
      this.detalles = document.createElement('section')
      this.detalles.id = `detalles${last}`
      this.detalles.classList.add('detalles')
      this.elegir.appendChild(this.detalles)
        this.check1 = document.createElement('form')
        this.check1.id = `check${last}`
        this.check1.classList.add('check')
        this.detalles.appendChild(this.check1)
          this.option = document.createElement('label')
          this.option.id = `option${last}`
          this.option.classList.add('option')
          this.option.innerHTML = 'Con todo'
          this.check1.appendChild(this.option)
          this.opcionBox1 = document.createElement('input')
          this.opcionBox1.id = `verificar1 ${last}`
          this.opcionBox1.classList.add('opcionBox')
          this.opcionBox1.type = 'checkbox'
          this.check1.appendChild(this.opcionBox1)
        this.check2 = document.createElement('form')
        this.check2.id = `check${last}`
        this.check2.classList.add('check')
        this.detalles.appendChild(this.check2)
          this.option = document.createElement('label')
          this.option.id = `option${last}`
          this.option.classList.add('option')
          this.option.innerHTML = 'Sin arroz'
          this.check2.appendChild(this.option)
          this.opcionBox2 = document.createElement('input')
          this.opcionBox2.id = `verificar2 ${last}`
          this.opcionBox2.classList.add('opcionBox')
          this.opcionBox2.type = 'checkbox'
          this.check2.appendChild(this.opcionBox2)
        this.check3 = document.createElement('form')
        this.check3.id = `check${last}`
        this.check3.classList.add('check')
        this.detalles.appendChild(this.check3)
          this.option = document.createElement('label')
          this.option.id = `option${last}`
          this.option.classList.add('option')
          this.option.innerHTML = 'Sin salsa'
          this.check3.appendChild(this.option)
          this.opcionBox3 = document.createElement('input')
          this.opcionBox3.id = `verificar3 ${last}`
          this.opcionBox3.classList.add('opcionBox')
          this.opcionBox3.type = 'checkbox'
          this.check3.appendChild(this.opcionBox3)
        this.check4 = document.createElement('form')
        this.check4.id = `check${last}`
        this.check4.classList.add('check')
        this.detalles.appendChild(this.check4)
          this.option = document.createElement('label')
          this.option.id = `option${last}`
          this.option.classList.add('option')
          this.option.innerHTML = 'Desarmados'
          this.check4.appendChild(this.option)
          this.opcionBox4 = document.createElement('input')
          this.opcionBox4.id = `verificar4 ${last}`
          this.opcionBox4.classList.add('opcionBox')
          this.opcionBox4.type = 'checkbox'
          this.check4.appendChild(this.opcionBox4)
    /*           this.guisado1 = document.getElementById('opcion1')
          this.guisado2 = document.getElementById('opcion2')
          this.guisado3 = document.getElementById('opcion3') */
          this.opcion1.innerHTML = menu[0].nombre
          this.opcion2.innerHTML = menu[1].nombre
          this.opcion3.innerHTML = menu[2].nombre
    this.opcionBox1.onclick = Orden.prototype.cambio1
    this.opcionBox2.onclick = Orden.prototype.cambio2
    this.opcionBox3.onclick = Orden.prototype.cambio3
    this.opcionBox4.onclick = Orden.prototype.cambio4
  }
  Orden.prototype.cambio1 = function (){
    if (Orden.prototype.opcionBox1.checked){
      Orden.prototype.opcionBox1.checked = true
      Orden.prototype.opcionBox2.checked = false
      Orden.prototype.opcionBox3.checked = false
      Orden.prototype.opcionBox4.checked = false
    }else{
      Orden.prototype.opcionBox1.checked = false
    }
  }
  Orden.prototype.cambio2 = function (){
    if (Orden.prototype.opcionBox2.checked){
      Orden.prototype.opcionBox2.checked = true
      Orden.prototype.opcionBox1.checked = false
    }
  }
  Orden.prototype.cambio3 = function(){
    if (Orden.prototype.opcionBox3.checked){
      Orden.prototype.opcionBox3.checked = true
      Orden.prototype.opcionBox1.checked = false
    }
  }
  Orden.prototype.cambio4 = function(){
    if (Orden.prototype.opcionBox4.checked){
      Orden.prototype.opcionBox4.checked = true
      Orden.prototype.opcionBox1.checked = false
    }
  }
  /* Orden.prototype.checked = function(){
     this.verif1.checked = true
     this.verif2.checked = true
     this.verif3.checked = true
     this.verif4.checked = true
  } */
  