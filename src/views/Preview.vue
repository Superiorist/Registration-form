<template>
  <div class="preview">
    <div class="user-info-main__container">
      <h1>Персональные данные</h1>
      <p v-if="user.name.length > 0" class="user-info__p">{{user.name}}&#44;&nbsp;{{user.age}}</p>
    </div>
    <div class="kids-info-main__container">
      <h1>Дети</h1>
      <p class="kids-info__p" v-show="kid.name != ''" v-for="kid in user.kids">{{kid.name}}&#44;&nbsp;{{kid.age}}</p>
    </div>
  </div>
</template>
<script>


export default {
  name: "preview",

  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style scooped>
.user-info-main__container{
  display: flex;
  flex-direction: column;
  padding: 0 375px;
  margin-top: 30px;
}
.kids-info-main__container{
  display: flex;
  flex-direction: column;
  padding: 0 375px;
  margin-top: 60px;
}
.user-info__p {
  margin: 20px 0 0 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}
.kids-info__p {
  margin: 20px 0 0 0;
  width: 143px;
  height: 44px;
  background: #F1F1F1;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  justify-content: space-around;
  display: flex;
  align-items: center;
}

</style>
