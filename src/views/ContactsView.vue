<script setup lang="ts">
import { ref } from 'vue';

const showPhoneNumber = ref(false);

const togglePhoneNumber = () => {
  showPhoneNumber.value = !showPhoneNumber.value;
};
</script>

<template>
  <body>
    <div class="headerContainer">
      <h2>Vill du komma i kontakt med mig?</h2>
      <h3>Då har du kommit till rätt ställe!</h3>
    </div>
    <div class="infoContainer">
      <div class="lia">
        <p class="lia-info">Jag söker just nu LIA-plats för perioden 13 oktober - 19 december!</p>
        <p>Har du en plats att erbjuda eller vet någon som ev har det är du mer än välkommen att höra av dig.</p>
      </div>
      <p class="contact-info">
        Nedan hittar du mina kontaktuppgifter samt länk till min GitHub där du kan ta en närmare kik på mina projekt.
      </p>
      <div class="contacts-container">
        <a href="mailto:Anna.Biehl@medieinstitutet.se">
          <i class="fa-solid fa-at"></i>
        </a>
        <div class="phone-container">
          <a href="tel:+46707972231" @click.prevent="togglePhoneNumber">
            <i class="fas fa-phone"></i>
          </a>
          <p v-if="showPhoneNumber">+46707972231</p>
        </div>
        <a href="https://www.linkedin.com/in/anna-biehl-4b5497330" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Biehlen" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
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
  margin-left: 15px;
  margin-right: 15px;
  .headerContainer {
    h2 {
      font-family: $font-italianno;
      font-size: 2.1rem;
      font-weight: 100;
      opacity: 0;
      animation: slideInFromLeft 1s ease-out forwards;
    }
    h3 {
      font-family: $font-montserrat;
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .infoContainer {
    font-family: $font-montserrat;

    .lia {
      background-color: $light-green;
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      .lia-info {
        font-family: $font-montserrat;
        font-weight: 700;
        font-size: 1rem;
      }
    }

    .contact-info {
      margin-bottom: 0;
    }

    .contacts-container {
      display: flex;
      justify-content: space-evenly;
      gap: 1rem;
      padding-top: 5rem;
      a {
        color: $black;
        text-decoration: none;
        i {
          font-size: 2rem;
        }
      }

      a:hover {
        text-shadow:
          0px 0px 5px $dark-green,
          0px 0px 10px $dark-green,
          0px 0px 15px $dark-green;
      }

      a:focus {
        outline: none;
        box-shadow: none;
      }

      .phone-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: $black;
        }
      }
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
      h3 {
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

      h3 {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
