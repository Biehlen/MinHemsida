<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderView from '@/components/fixtures/HeaderView.vue';
import MyProjects from '@/components/MyProjects.vue';
import FooterView from '@/components/fixtures/FooterView.vue';
</script>

<template>
  <div class="wrapper">
    <header>
      <HeaderView />
    </header>
    <main>
      <RouterView />
      <MyProjects class="projects" />
    </main>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .projects {
    margin-top: 30px;
  }
}

footer {
  background: $dark-green;
  color: $white;
  text-align: center;
  padding: 10px;
}
</style>
