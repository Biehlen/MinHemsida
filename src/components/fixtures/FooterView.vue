<script setup lang="ts"></script>

<template>
  <body>
    <footer>
      <div>
        <p>© 2025 Av Anna Biehl</p>
      </div>
    </footer>
  </body>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
body {
  background-color: $dark-green;

  footer {
    height: 50px;

    div {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
    }
  }
}
</style>
