function Person(nombre, apellido, nacionalidad, domicilio) {
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.nacionalidad = nacionalidad),
      (this.domicilio = domicilio);
}
  
  const persona1 = new Person("Omar", "Landaeta", "Venezolano", "Venezuela");
  const { nombre, apellido, nacionalidad, domicilio } = persona1;
  
  Person.prototype.edad = 45;
  Person.prototype.aniosExperiencia = 2;
  Person.prototype.profesion = "Programador";
  Person.prototype.saludando = function () {
    return "Y estoy saludandote desde un prototype!";
  };
  
  Person.prototype.experiencia = function () {
    if (this.aniosExperiencia >= 2 && this.aniosExperiencia <= 4) {
      return 'Junior';
    } else {
      return "Senior";
    }
  };
  