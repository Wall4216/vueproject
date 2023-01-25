<script setup>
import  {onMounted, ref} from "vue";
import {useRouter} from 'vue-router'

const router = useRouter()


let products = ref([])
onMounted(async () =>{
    getProducts()
})

const  newProduct = () => {
    router.push('/product/new')
}

const getProducts = async () => {
    let response = await axios.get("/api/get all product")
    products.value = response.data.products;
}

const outImage = (img) => {
    return "/upload/" + img;
}
</script>

<template>
<div class="container">
    <!DOCTYPE html>
    <html >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">

        <title>CRUD-HTML-CSS</title>
        <link href="crud.css" rel="stylesheet">

    </head>
    <body>

    <div class="container">

        <div class="products__list table  my-3">

            <div class="customers__titlebar dflex justify-content-between align-items-center">
                <div class="customers__titlebar--item">
                    <h1 class="my-1">Products</h1>
                </div>
                <div class="customers__titlebar--item">
                    <button class="btn btn-secondary my-1" @click="newProduct">
                        Add Product
                    </button>
                </div>
            </div>

            <div class="table--heading mt-2 products__list__heading " style="padding-top: 20px;background:#FFF">
                <!-- <p class="table--heading--col1">&#32;</p> -->
                <p class="table--heading--col1">image</p>
                <p class="table--heading--col2">
                    Product
                </p>
                <p class="table--heading--col4">Type</p>
                <p class="table--heading--col3">
                    Inventory
                </p>
                <!-- <p class="table--heading--col5">&#32;</p> -->
                <p class="table--heading--col5">actions</p>
            </div>

            <!-- product 1 -->
            <div class="table--items products__list__item" v-for="item in items" :key="item.id" v-if="products.length > 0">
                <div class="products__list__item--imgWrapper">
                    <img class="products__list__item--img" :src="ourImage(item.photo)"  style="height: 40px;" v-if="item.photo">
                </div>
                <a href="# " class="table--items--col2">
                   {{item.name}}
                </a>
                <p class="table--items--col2">
                    {{ item.type }}
                </p>
                <p class="table--items--col3">
                    {{ item.quantity }}
                </p>
                <div>
                    <button class="btn-icon btn-icon-success" >
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn-icon btn-icon-danger" >
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        <div class="table--items products__list__item" v-else>
            <p> Products not founded</p>
        </div>
        </div>







        <br><br><br>






        <br><br><br>





    </div>

    </body>
    </html>
</div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

</style>
