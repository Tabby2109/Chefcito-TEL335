<template>
    <body>
        <div>
            <nav class="nav flex-column py-1 px-2">
                <a class="nav-link" @click="()=>navigate(0)">Perfil</a>
                <a class="nav-link" @click="()=>navigate(1)">Tus recetas</a>
                <a class="nav-link" @click="()=>navigate(2)">Ajustes</a>
                
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