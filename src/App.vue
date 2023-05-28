<template>
  <div id="nav-header__container">
    <div class="header">
      <div class="header__img"></div>
      <div class="header-nav__container">
        <router-link class="header__form" to="/">Форма</router-link>
        <router-link class="header__preview" to="/preview">Превью</router-link>
      </div>
    </div>
    <footer>all rights reserved</footer>
  </div>
  <router-view/>
</template>

<script>
 

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');

html, body {
  margin: 0;
  padding: 0;
  
}
#app {
 margin: 0;
 padding: 0;
}

#nav-header__container {

}
.header {
  display: flex;
  height: 76px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1192px;
  margin: auto;
}
.header__img {
  background-image: url('./assets/img/headerimg.svg');
  height: 29px;
  width: 96px;
  position: absolute;
  left: 0;
  background-repeat: no-repeat;
}
.header-nav__container {
  display: flex;
  gap: 24px;
}
footer {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  height: 76px;
  width: 100%;
  background: #FAFAFA;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
}
h1{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}
.footer {
  height: 76px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.header__form{
 font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
}
.header__preview{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
}
</style>
