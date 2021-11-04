<template>
  <div>
    <h4>{{ title }}</h4>
    <ul v-for="(message, index) in messages" :key="index">
      <li>{{ message }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Messages',
    props: ['title'],
    data() {
      return {
        messages: ['1st', '2nd']
      }
    }
  }
</script>
