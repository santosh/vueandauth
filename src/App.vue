<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="ml-2">
      <Messages title="Messages" />
    </v-main>
  </v-app>
</template>

<script>
  import Messages from './components/Messages';

  export default {
    name: 'App',

    components: {
      Messages,
    },

    data: () => ({
      //
    }),
  };
</script>
