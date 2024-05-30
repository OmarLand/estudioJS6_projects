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
  
  console.log(
    `Mi nombre es ${nombre} ${apellido}, soy ${nacionalidad} y vivo en ${domicilio} y tengo ${persona1.edad} años de edad. Y mi profesión es ser ${persona1.profesion}, ${persona1.saludando()}, con ${persona1.aniosExperiencia} años de experiencia, lo cual me hace un programador: ${persona1.experiencia()}`,
  );
  