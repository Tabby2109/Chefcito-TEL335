<template>
  <div class="container-fluid">
    <div class="abs-center">
      
      <form @submit="login">
        <h1>Iniciar Sesión</h1>
        <div class="mb-1">
          <label for="email" class="form-label">Correo</label>
          <input type="email" class="form-control" id="email" required v-model="email">
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="pass" required v-model="password">
          
        </div>
        <button type="submit" class="btn btn-light mb-3">Validar</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.email === 'admin@gmail.com' && this.password === 'pass') {
        console.log('funciono el login');
        this.$router.push('/menu');

      } else {

        console.log('falló el login');

      }
    },
    
  }
};
</script>


<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h1 {
  font-family: "Queesha";
  color:#ccc;
  font-size:330%;
  text-align: center;
}

label{
  color: #ccc;
  font-size: 80%;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  font-size: 120%;
  font-weight: 600;
}

button:hover {
  background-color: #5c5c5c;
}

button:disabled {
  background-color: #686868;
  cursor: not-allowed;
}

.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 20%;
}
</style>