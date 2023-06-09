<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.svg" alt="" width="40" height="30">
      Chefsito
    </a>
    
    <div class="d-flex justify-content-end">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Registrate</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</nav>


</template>

<script>
  export default {
    name: "HeaderApp"
  }
</script>

<style>

  .nav {
    background-color: rgb(14, 13, 12);
    font-size: xx-large;
    width: flex;
    padding: 20px;
    overflow: hidden;
  }

  a {
    padding-left: 10px;
  }

 
</style>