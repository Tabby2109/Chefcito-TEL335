
<template>
    
  <div>
    <h2>Registro</h2>
    <form>
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" required>
      </div>
      <div>
        <button type="submit">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RegisterView"
  }
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>