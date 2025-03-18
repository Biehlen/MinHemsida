<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from 'swiper/modules';

import MunkFabriken from '@/assets/Munkfabriken.png';
import ToughCookie from '@/assets/ToughCookie.jpg';
import Quiz from '@/assets/Quiz.jpg';
import MelsDriveIn from '@/assets/MelsDriveIn.jpg';
import RaddaResten from '@/assets/RaddaResten.jpg';

const images = [
  { src: ToughCookie, link: 'https://biehlen.github.io/ToughCookie/', text: 'ToughCookie', text2: 'HTML/CSS' },
  {
    src: MunkFabriken,
    link: 'https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-Biehlen/',
    text: 'Munkfabriken',
    text2: 'Javascript',
  },
  {
    src: Quiz,
    link: 'https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-king-edward/',
    text: 'Quiz',
    text2: 'Grupparbete',
  },
  {
    src: MelsDriveIn,
    link: 'https://medieinstitutet.github.io/fed24d-grafiska-verktyg-kattalemurerna/',
    text: 'Mels drive in',
    text2: 'Grupparbete',
  },
  {
    src: RaddaResten,
    link: 'https://www.figma.com/proto/1N3tOmFaCJwT3YA3pLFx4x/UX-Grupp-7?page-id=215%3A2&node-id=257-392&starting-point-node-id=257%3A392&t=rSgGv9rIiKlulq5M-1',
    text: 'Rädda resten',
    text2: 'Grupparbete',
  },
];
</script>

<template>
  <div class="projects-container">
    <h3>Mina projekt:</h3>
    <Swiper
      :modules="[Navigation, Scrollbar]"
      :space-between="15"
      :navigation="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :breakpoints="{
        0: { slidesPerView: 2 }, // Mobil
        768: { slidesPerView: 3 }, // Tablet
        1024: { slidesPerView: 4 }, // Desktop
      }"
      class="carousel"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <a :href="image.link" target="_blank">
          <div class="image-container">
            <img :src="image.src" :alt="image.text" />
          </div>
          <p>{{ image.text }}</p>
          <p class="text2">{{ image.text2 }}</p>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.projects-container {
  margin-top: 50px;
}

h3 {
  font-family: $font-montserrat;
  font-weight: 500;
  background-color: $light-green;
  margin-bottom: 0;
}
.carousel {
  background-color: $light-green;
  width: 100vw;
  height: 250px;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  a {
    //text-decoration: none;
    color: $black;
  }

  a:hover {
    text-shadow: 4px 4px 15px $dark-green;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: $black;
    background: $light-green;
    //padding: 5px;
    margin-top: 7px;
    width: 100%;
    margin-bottom: 0;
  }

  .text2 {
    font-size: 0.9rem;
  }

  .image-container {
    width: 170px;
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 2px;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: $black;
}

@media (min-width: 768px) {
  h3 {
    display: flex;
    justify-content: center;
  }
}
</style>
