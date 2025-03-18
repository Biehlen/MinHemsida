<script setup lang="ts">
import { ref } from 'vue';
import SVG from '@/assets/SVG/ABC.svg';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'enter' || event.key === '') {
    toggleMenu();
  }
}
</script>

<template>
  <header>
    <div class="hamburger" @click="toggleMenu" aria-lable="open menu" @keydown="handleKeyDown" tabindex="0">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="logo">
      <img :src="SVG" />
    </div>

    <nav :class="{ open: isMenuOpen }">
      <button class="close" @click="toggleMenu" aria-lable="close menu">
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <ul>
        <li>
          <router-link to="/" active-class="active" @click="toggleMenu" aria-lable="about"> Om mig </router-link>
        </li>
        <li>
          <RouterLink to="/education" active-class="active" @click="toggleMenu" aria-lable="education">
            Kompetenser
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts" active-class="active" @click="toggleMenu" aria-lable="contacts">
            Kontakt
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
header {
  height: 112px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $dark-green;
  z-index: 2;

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 65px;
      margin-right: 40px;
    }
  }

  .hamburger {
    width: 45px;
    height: 35px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    margin-left: 1rem;

    span {
      height: 6px;
      background: $black;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
  }

  nav {
    position: fixed;
    left: 6vw;
    top: 120px;
    width: 80vw;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    background-color: $dark-green;
    transform: translateX(-120%);
    transition: transform 0.3s ease;
    padding: 1rem;
    border-radius: 0 50px 0 50px;
    z-index: 99999;

    .close {
      position: absolute;
      right: 20px;
      background: none;
      border: none;
      width: 45px;
      height: 45px;
      cursor: pointer;

      .line {
        position: absolute;
        width: 100%;
        height: 6px;
        background-color: $black;
        border-radius: 10px;
        transform-origin: center;
      }

      .line:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .line:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      li {
        a {
          color: $black;
          text-decoration: none;
          font-family: $font-montserrat;
          font-size: 1.5rem;
          position: relative;

          &.active::after {
            content: '';
            display: block;
            height: 2px;
            background-color: $light-green;
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
          }

          &:hover {
            color: $light-green;
          }
        }
      }
    }
    &.open {
      transform: translateX(0%);
    }
  }

  @media (min-width: 768px) {
    header {
      height: 169px;
    }
    .logo {
      img {
        margin-left: 20px;
        height: 110px;
      }
    }

    .hamburger {
      display: none;
    }

    nav {
      position: static;
      width: auto;
      height: auto;
      transform: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      padding: 0;
      border-radius: 20px;

      .close {
        display: none;
      }
      ul {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        margin-right: 20px;
      }
    }

    nav a {
      outline: none;
    }

    nav a:focus {
      outline: none;
      box-shadow: none;
    }
  }

  @media (min-width: 1024px) {
    .logo {
      img {
        margin-left: 40px;
        height: 130px;
      }
    }
    nav ul li a {
      font-size: 1.3 rem;
      margin: 0 50px;
    }
  }
}
</style>
