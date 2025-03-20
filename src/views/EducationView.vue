<script setup lang="ts"></script>

<template>
  <body>
    <div class="headerContainer">
      <h2>Utbildning och kompetenser</h2>
    </div>
    <div class="infoContainer">
      <p class="text">
        Nedan hittar du information om min utbildning samt de kunskaper jag fått såhär långt i min utbildning.
      </p>
      <div class="listContainer">
        <div class="education-container">
          <ul>
            <h4>Utbildning</h4>
            <li>Front end developer</li>
            <p>Medieinstitutet, 2024-Pågående</p>
            <li>Undersköterskeutbildning</li>
            <p>Moa lärcentrum samt KUI, 2018-2019</p>
            <li>Gymnasieexamen</li>
            <p>S:T Eriks gymnasium, 2006-2009</p>
            <p>- Estetiska programmet inriktning musikal</p>
          </ul>
        </div>
        <div class="knowledge-container">
          <ul>
            <h4>Kompetenser inom:</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript/TypeScript</li>
            <li>Agilt projektarbete</li>
            <li>UX/Usability</li>
            <li>Vue.js</li>
            <li>API utveckling (pågående)</li>
          </ul>
        </div>
      </div>
      <div class="information">
        <p>
          Jag studerar till Frontend Developer på Medieinstitutet, där jag lär mig att utveckla moderna och
          användarvänliga webblösningar. Utbildningen omfattar allt från HTML, CSS och JavaScript till att använda olika
          ramverk och API:er, med fokus på design, interaktivitet och användarupplevelse. Genom praktiska projekt och
          två längre praktikperioder (LIA) får jag värdefull erfarenhet av att arbeta i verkliga utvecklingsmiljöer.
          Detta ger mig både teknisk kompetens och insikt i hur branschen fungerar.
        </p>
        <a
          href="https://medieinstitutet.se/utbildningar/front-end-developer/?gad_source=1&gclid=Cj0KCQjw1um-BhDtARIsABjU5x5iAopAzhi_vrsasLGMFFnIvqCFL3snUiA-mYzbIAFHPHzCWHRVvigaAsHZEALw_wcB"
          >Mer info om min utbildning hittar du här</a
        >
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
  .headerContainer {
    margin-left: 20px;
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
    margin-right: 50px;

    .text {
      margin-left: 20px;
      padding-bottom: 10px;
    }

    .education-container {
      ul {
        font-size: 1rem;
      }

      h4 {
        margin-top: 2px;
      }
      li {
        font-size: 1rem;
        font-weight: 500;
        //margin-bottom: 10px;
      }

      p {
        font-size: 0.9rem;
      }
    }
    .knowledge-container {
      padding-top: 20px;
      padding-bottom: 10px;
      ul {
        line-height: 1.5rem;
      }
    }
    .information {
      margin-left: 20px;
      font-size: 0.9rem;

      a {
        display: flex;
        justify-content: center;
        color: $black;
      }

      a:hover {
        text-shadow: 4px 4px 15px $dark-green;
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
    }

    .infoContainer {
      .listContainer {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        .education-container {
          width: 45%;

          ul {
            font-size: 1.1rem;
          }
          li {
            font-size: 1.1rem;
          }
        }

        .knowledge-container {
          width: 45%;
          padding-top: 0;

          ul {
            font-size: 1.1rem;
          }
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
    .infoContainer {
      .listContainer {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        .education-container {
          width: 40%;

          ul {
            font-size: 1.1rem;
          }
          li {
            font-size: 1.1rem;
          }
        }

        .knowledge-container {
          width: 45%;
          padding-top: 0;

          ul {
            font-size: 1.1rem;
          }
        }
      }

      p {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
