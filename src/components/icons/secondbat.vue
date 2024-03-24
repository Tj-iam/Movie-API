<script setup>
import { ref, watch } from 'vue'
var results=any;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzJlYmFlMmM1NTg0MTIwNWViZTYyODc2Nzc2NjdkZiIsInN1YiI6IjY1ZmI3ZGZjNWJlMDBlMDEzMDZkNjk4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDfXDfL8d683kGMDBJxcle-UuT-F_AI0H3uRvDoNHIg'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
  results=response;

</script>

<template>
</template>