<template>
    <body>
        <div>
            <form class="d-flex px-4 pt-3">
                <input class="form-control me-2 borderless" type="search" placeholder="Buscar">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            <nav class="nav flex-column py-1 px-2">
                <a class="nav-link" @click="()=>navigate(0)">Explorar</a>
                <a class="nav-link" @click="()=>navigate(1)">Suscripciones</a>
                <a class="nav-link" @click="()=>navigate(2)">Guardados</a>
                <a class="nav-link" @click="()=>navigate(3)">To do list</a>
                <button id="crear" class="btn btn-outline-light mx-3 font">Crear</button>
            </nav>
        </div>
    </body>
</template>

<script setup>

    const navigate = (n) => {
        console.log(n);
    }

</script>

<style scoped>
body {
    background: rgb(255, 145, 43);
    font-family: "Tommy";
    height: auto;
}
a {
    text-align: left;
    font-size: 200%;
    color: aliceblue;
    cursor: pointer;
}
.font {
    font-size: 200%;
    
}
.borderless{
    border-style: hidden;
}
</style>