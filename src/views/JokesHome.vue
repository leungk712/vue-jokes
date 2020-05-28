<template>
  <v-container>
    <v-toolbar class="mb-4 display-1" elevation="8" style="width: 72vw"
      >Daily Jokes Application</v-toolbar
    >
    <v-btn
      class="teal lighten-2 white--text"
      @click="refreshNewJokes"
      :loading="loading"
      >Get New Joke</v-btn
    >
    <v-layout>
      <v-row align-content="center">
        <v-col cols="12">
          <v-row>
            <jokes-card
              v-for="(joke, i) in currentJokes"
              :key="i"
              :currentJoke="joke"
              :show="show"
              :isTrue="isTrue"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import JokesCard from "@/components/JokesCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "JokesHome",
  props: {},

  data() {
    return {
      loading: false,
      show: false,
      isTrue: false
    };
  },

  methods: {
    ...mapActions({
      getJokes: "getJokes"
    }),

    refreshNewJokes() {
      this.loading = true;

      this.getJokes()
        .then(() => {
          this.loading = false;
          this.isTrue = false;
          this.show = false;
        })
        .catch(() => {
          this.loading = false;
          alert("Couldn't refresh for new jokes! :(");
        });
    }
  },

  computed: {
    ...mapGetters({
      currentJokes: "retrieveJokes"
    })
  },

  created() {
    this.getJokes();
  },

  components: {
    JokesCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
