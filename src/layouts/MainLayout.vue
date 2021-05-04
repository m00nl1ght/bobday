<template>
    <div class="grey lighten-5">
        <v-app-bar color="#d32f2f">
            <v-container>
              <Navbar />
            </v-container>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'

export default {
  components: {
    Navbar
  },

  data: () => ({

  }),
};
</script>
