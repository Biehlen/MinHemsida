<script setup lang="ts"></script>

<template>
  <body>
    <div class="welcomeContainer">
      <h1>Hej och välkommen!</h1>
      <h2>Det är jag som är Anna Biehl</h2>
    </div>
    <div class="imgContainer">
      <img
        src="/AnnaBiehl.jpg"
        alt="A picture of a woman with brown long wavy hair and brown eyes."
        width="425"
        height="453"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="about">
      <p class="text-block1">
        Just nu följer jag en dröm som jag haft sedan länge – att utbilda mig till frontend utvecklare. Efter många år
        som familjens "it-kontakt," där jag ofta fått hjälpa till att navigera webbsidor och appar, känns det oerhört
        spännande att få lära mig att själv skapa användarvänliga, estetiskt tilltalande webblösningar som är enkla att
        använda för både gamla och unga.
      </p>
      <p class="text-block2">
        Jag har alltid fascinerats av att följa processer, oavsett om det handlar om att utveckla en idé till en färdig
        produkt eller att se något växa fram i min trädgård – då odling är en av mina stora fritidsintressen. På samma
        sätt uppskattar jag möjligheten att följa varje steg inom webbutveckling och se ett projekt ta form.
      </p>
      <p>
        Tidigare har jag arbetat med människor i alla åldrar, från 1 till 100 år, vilket har gett mig en bred erfarenhet
        av att möta olika behov och perspektiv. Jag har även deltagit i flera ungdomsutbyten runtom i Europa, där jag
        fått samarbeta med människor från olika kulturer och språk, något som har stärkt min förmåga att kommunicera och
        samarbeta i varierade miljöer.
      </p>
      <p>
        Jag gillar att utmana mig själv och att lära mig nya saker – en egenskap som jag märkt passar perfekt inom denna
        bransch, där utvecklingen ständigt går framåt. Genom mina tidigare arbetslivserfarenheter har jag lärt mig att
        arbeta både självständigt och i team, att vara kreativ och lösningsorienterad.
      </p>
      <p class="text-block3">
        Som person är jag nyfiken och ser verkligen fram emot att fortsätta utvecklas och att få testa på att applicera
        det jag lärt mig i min utbildning på det verkliga arbetslivet.
      </p>
    </div>
    <div class="lia">
      <p>Jag söker just nu LIA-plats för perioden 13 oktober - 19 december!</p>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

body {
  .welcomeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: $font-italianno;
    padding-left: 35%;
    h1 {
      font-size: 2.5rem;
      font-weight: 100;
      margin-top: 30px;
      opacity: 0;
      animation: slideInFromRight 1s ease-out forwards;
    }
    h2 {
      font-size: 2rem;
      font-weight: 100;
      max-width: 60%;
      margin-top: 0;
      opacity: 0; // För att gömma innan animation startar
      animation: slideInFromRight 1s ease-out forwards;
      animation-delay: 0.5s; // Fördröjer h2 så den kommer efter h1
    }
  }

  img {
    position: absolute;
    top: 170px;
    width: 120px;
    height: auto;
    border-radius: 60px;
    margin-left: 15px;
  }

  .about {
    font-family: $font-montserrat;

    .text-block1 {
      margin-top: 30px;
    }

    p {
      font-size: 1rem;
      margin-top: 15px;
      padding-left: 10px;
      padding-right: 20px;
      line-height: 1.5;
    }

    .text-block3 {
      margin-bottom: 20px;
    }
  }
  .lia {
    display: flex;
    justify-content: center;
    p {
      padding-left: 10px;
      font-family: $font-montserrat;
      font-weight: 700;
      font-size: 1rem;
    }
  }
}

@media (min-width: 768px) {
  body {
    .welcomeContainer {
      padding-left: 15%;
      h1 {
        font-size: 3.2rem;
      }
      h2 {
        font-size: 2.2rem;
        max-width: 50%;
      }
    }
    img {
      top: 200px;
      margin-left: 60px;
      width: 150px;
      border-radius: 100px;
    }

    .about {
      .text-block1 {
        margin-top: 50px;
      }
      p {
        font-size: 1.1rem;
        padding-left: 50px;
        padding-right: 50px;
      }
    }
    .lia {
      margin-top: 40px;
      p {
        padding-left: 50px;
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  body {
    .welcomeContainer {
      padding-left: 20%;
      h1 {
        font-size: 3.5rem;
      }
      h2 {
        font-size: 2.5rem;
        max-width: 40%;
      }
    }

    img {
      top: 190px;
      margin-left: 100px;
      width: 200px;
      border-radius: 100px;
    }
    .about {
      .text-block1 {
        margin-top: 80px;
      }
      p {
        padding-left: 100px;
        padding-right: 120px;
      }
    }
    .lia {
      margin-top: 50px;
      p {
        padding-left: 100px;
      }
    }
  }
}
</style>
