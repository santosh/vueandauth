<template>
  <div>
    <h4>{{ msg }}</h4>
    <ul>
      <li>1st</li>
      <li>2nd</li>
    </ul>
  </div>
</template>

<script>
  export default {
    component: 'Messages',
    props: ['msg']
  }
</script>
