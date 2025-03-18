<script setup lang="ts"></script>

<template>
  <body>
    <div class="headerContainer">
      <h2>Utbildning och kompetenser</h2>
    </div>
    <div class="infoContainer">
      <p>Nedan hittar du information om min utbildning samt de kunskaper jag än så länge har</p>
      <div class="listContainer">
        <ul>
          Utbildning
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          Kompetenser
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

body {
  .headerContainer {
    h2 {
      font-family: $font-italianno;
      font-size: 2.3rem;
      font-weight: 100;
      opacity: 0;
      animation: slideInFromLeft 1s ease-out forwards;
    }
  }

  .infoContainer {
    font-family: $font-montserrat;

    .listContainer {
      ul {
        font-size: 1rem;
      }
      li {
        font-size: 1rem;
      }
    }
    p {
      font-size: 1rem;
      margin-bottom: 50px;
    }
  }
}

@media (min-width: 768px) {
  body {
    padding-left: 50px;
    padding-right: 50px;

    .headerContainer {
      h2 {
        font-size: 2.7rem;
      }
    }

    .infoContainer {
      .listContainer {
        ul {
          font-size: 1.1rem;
        }
        li {
          font-size: 1.1rem;
        }
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  body {
    .headerContainer {
      h2 {
        font-size: 3rem;
      }
    }
  }
}
</style>
