<template>
  <v-card class="my-4 mx-4" outlined elevation="7" style="width: 35vw">
    <v-card-title>
      <v-icon class="mr-2">mdi-emoticon-lol-outline</v-icon>
      {{ capitalizeFirst(currentJoke.type) }}
    </v-card-title>
    <v-divider />
    <v-card-text>
      <div class="joke">
        <span class="title">Joke:</span>
        {{ currentJoke.setup }}
      </div>
      <div class="punchline my-2" v-show="isTrue">
        <span class="title">Answer:</span>
        {{ currentJoke.punchline }}
      </div>
    </v-card-text>
    <v-btn
      v-model="show"
      class="primary ma-2"
      @click="viewPunchline(currentJoke.id)"
      >See Punchline!</v-btn
    >
  </v-card>
</template>

<script>
export default {
  props: {
    currentJoke: {
      type: Object
    },
    show: {
      type: Boolean
    },
    isTrue: {
      type: Boolean
    }
  },

  data() {
    return {
      hideBtn: false
    };
  },

  methods: {
    viewPunchline(jokeId) {
      this.show = true;
      this.isTrue = true;
      return jokeId;
    },

    capitalizeFirst(jokeTitle) {
      return jokeTitle.charAt(0).toUpperCase() + jokeTitle.slice(1);
    }
  },

  computed: {}
};
</script>

<style scoped>
.btn {
  color: red;
}
</style>
