<template>
    <div class="custom">
      <section class="hero">
        <div class="hero-text container">
          <h2>
            This is an custom page 
          </h2>
        </div>
      </section>
    </div>
</template>
<style lang="scss" scoped>
.hero {
  background-attachment: fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(0, 0, 0);

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: rgb(44, 44, 44);
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
