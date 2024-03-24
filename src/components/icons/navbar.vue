<script setup>
import { ref } from 'vue'

const items = ['Home','Movies','TV series','People'];
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(item, ) in items" :key="item.id">
          <a class="nav-link" aria-current="page" href="#">{{ item }}</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>
<style>



</style>