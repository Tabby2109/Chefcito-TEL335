<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand" href="#" @click="() => changePato(0)">
            Chefsito
        </a>


        <div class="container-fluid end">

            <button type="button" class="btn btn-dark" @click="() => logout()">Cerrar Sesión</button>

        </div>


    </nav>
</template>
  
<script>
export default {
    name: "HeaderComp",

    methods: {

        logout(){
            this.$router.push('/');
        }

    }
}
</script>
  
<style scoped>
a {
    padding-left: 10px;
}

.navbar-brand {
    font-family: "Queesha";
    font-weight: 800;
    font-size: x-large;
}

.space-evenly {
    justify-content: space-evenly;
}
.end {
    justify-content: end;
}

</style>