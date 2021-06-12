function Consultorio(nombre, paciente) {
    this._nombre = function () {
      return nombre;
    };
    this._paciente = function () {
      return paciente || [];
    };
  
    Consultorio.prototype.getNombre = function () {
      return this._nombre;
    };
    Consultorio.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };

    Consultorio.prototype.getPaciente = function () {
      return this._paciente;
    };
    Consultorio.prototype.setPaciente = function (paciente) {
      this._paciente = paciente;
    };
    Consultorio.prototype.buscarPorNombre = function (nombre) {
      var pacientesEncontrados = [];
      for (let i = 0; i < this.getPaciente().length; i++) {
        if ((nombre == this.getPaciente()[i].getNombre())) {
          pacientesEncontrados.push(this.getPaciente()[i]);
        }
      }
      console.log(pacientesEncontrados);
    };
  
    Consultorio.prototype.imprimirPacientes = function () {
      for (let i = 0; i < this.getPaciente().length; i++) {
        console.log("El paciente " + (i+1) +
            " es: " +
            this.getPaciente()[i].getNombre() +
            " su edad es: " +
            this.getPaciente()[i].getEdad() +
            " con un rut: " +
            this.getPaciente()[i].getRut() +
            " y con diagnóstico: " +
            this.getPaciente()[i].getDiagnostico()
        );
      }
    };
  }
  
  function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function () {
    return nombre}
    this._edad = function () {
      return edad
    }
    this._rut = function () {
      return rut
    }
    this._diagnostico = function () {
      return diagnostico
    }
  
    Paciente.prototype.getNombre = function () {
      return this._nombre;
    };
    Paciente.prototype.setNombre = function (nombre) {
      this._nombre = nombre;
    };
    Paciente.prototype.getEdad = function () {
      return this._edad;
    };
    Paciente.prototype.setEdad = function (edad) {
      this._edad = edad;
    };
    Paciente.prototype.getRut = function () {
      return this._rut;
    };
    Paciente.prototype.setRut = function (rut) {
      this._rut = rut;
    };
    Paciente.prototype.getDiagnostico = function () {
      return this._diagnostico;
    };
    Paciente.prototype.setDiagnostico = function (diagnostico) {
      this._diagnostico = diagnostico;
    };
  }
  
  var c1 = new Consultorio();
  c1.setNombre("Consultorio1");
  
  var p1 = new Paciente();
  p1.setNombre("Nicolas");
  p1.setEdad(27);
  p1.setRut("18308761-8");
  p1.setDiagnostico("COVID");
  
  var p2 = new Paciente();
  p2.setNombre("Evert");
  p2.setEdad(30);
  p2.setRut("1234657-8");
  p2.setDiagnostico("Problemas respiratorios");
  
  var p3 = new Paciente();
  p3.setNombre("Juan");
  p3.setEdad(47);
  p3.setRut("96308761-7");
  p3.setDiagnostico("VIH");
  
  var p4 = new Paciente();
  p4.setNombre("Edgardo");
  p4.setEdad(29);
  p4.setRut("18166442-8");
  p4.setDiagnostico("tuberculosis");
  
  var p5 = new Paciente();
  p5.setNombre("Daniela");
  p5.setEdad(43);
  p5.setRut("15765488-8");
  p5.setDiagnostico("piel de cristal");
  
  var p6 = new Paciente();
  p6.setNombre("NINO");
  p6.setEdad(85);
  p6.setRut("4676334-8");
  p6.setDiagnostico("hipertenso");
  
  c1.setPaciente([p1, p2, p3, p4, p5, p6]);
  c1.buscarPorNombre("Nicolas");
  c1.imprimirPacientes();
  





