<script setup lang="ts">
import { ref } from 'vue';

const nombre = ref('');
const apellido = ref('');
const edad = ref(null);
const genero = ref('');
const otroGenero = ref('');
const nombreValido = ref(true);
const apellidoValido = ref(true);
const edadValida = ref(true);
let generoValido = ref('');

const validateNombre = () => {
  nombreValido.value = nombre.value.length >= 5 && nombre.value.length <= 18;
};

const validateApellido = () => {
  apellidoValido.value = apellido.value !== nombre.value;
};

const validateEdad = () => {
  edadValida.value = edad.value !== null && edad.value > 0 && edad.value < 60;
};

const validateGenero = () => {
  generoValido.value = genero.value;
};

const submitForm = () => {
  const isNombreValid = nombre.value.length >= 5 && nombre.value.length < 18;
  const isApellidoValid = apellido.value !== nombre.value;
  const isEdadValid = edad.value !== null && edad.value > 0 && edad.value < 60;
  const isGeneroValid = genero.value !== '';
  const isOtroGeneroValid = genero.value === 'otro' ? otroGenero.value.trim() !== '' : true;

  if (isNombreValid && isApellidoValid && isEdadValid && isGeneroValid && isOtroGeneroValid) {
    generoValido.value = genero.value === 'otro' ? otroGenero.value.trim() : genero.value;
    alert(`Formulario enviado correctamente.`);
  } else {
    alert('Por favor, completa el formulario correctamente.');
  }
};
</script>
<template>
  <div class="centrado margen">
    <div class="contenedor-formulario-imagen">

      <form @submit.prevent="submitForm" class="formulario">
        <div class="campo-formulario">
          <label class="color" for="nombre">Nombre:</label>
          <input type="text" id="nombre" class="input-formulario" v-model="nombre" @input="validateNombre">
          <span class="mensaje-error" v-if="!nombreValido">El nombre debe tener 5 caracteres o 18 como máximo.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="apellido">Apellido:</label>
          <input type="text" id="apellido" class="input-formulario" v-model="apellido" @input="validateApellido">
          <span class="mensaje-error" v-if="!apellidoValido">El apellido no debe ser igual al nombre.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="edad">Edad:</label>
          <input type="number" id="edad" class="input-formulario" v-model="edad" @input="validateEdad">
          <span class="mensaje-error" v-if="!edadValida">La edad debe ser mayor a 0 y menor a 60.</span>
        </div>

        <div class="campo-formulario">
          <label class="color" for="genero">Género:</label>
          <select id="genero" v-model="genero" @change="validateGenero" class="input-formulario">
            <option value="">Selecciona una opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          <input type="text" v-if="genero === 'otro'" v-model="otroGenero" placeholder="Ingrese otro género"
            class="input-formulario">
        </div>

        <div class="campo-formulario centrar-boton">
          <button type="submit" class="boton-enviar">Enviar</button>
        </div>
      </form>
      <div class="imagen">
        <img class="tama" src="../assets/descarga.png" alt="Descripción de la imagen">
      </div>

    </div>

  </div>
</template>

<style scoped>
.contenedor-formulario-imagen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.tama {
  width: 356px;
}

.imagen {
  width: 400px;
  height: 100%;
  object-fit: cover;


}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formulario {
  width: 600px;
  background: linear-gradient(to right, #ffffff 12%, #062530 90%, #000000 100%);
  padding: 30px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.campo-formulario {
  margin-bottom: 20px;
}

.centrar-boton {
  text-align: center;
}

.color {
  color: #333;
}

.input-formulario {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 9px;
}

.mensaje-error {
  color: red;
  font-size: 12px;
}

.boton-enviar {
  background-color: #4CAF50;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

}

.boton-enviar:hover {
  background-color: #45a049;
}
</style>

