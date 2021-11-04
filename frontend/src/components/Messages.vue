<template>
  <div>
    <h4>{{ title }}</h4>
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(message, index) in messages"
          :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
