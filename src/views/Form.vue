<template>
  <div class="form">
   <div class="user-form-main__container">
      <h1>Персональные данные</h1>
      <div class="user-form-input__container">
        <div class="user-form-input-label__div">
          <input type="text" v-model="user.name"  placeholder=" " pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" class="main__input">
          <label class="main-input__label">Имя</label>
        </div>
        <div class="user-form-input-label__div" >
          <input type="number" v-model="user.age" placeholder=" " class="main__input">
          <label class="main-input__label">Возраст</label>
        </div>
    </div>
    <div class="kids-form-input-main__container">
      <div class="kids-form-btn__container" >
        <h1>Дети (макс. 5)</h1>
        <button class="add__btn" v-if="user.kids.length < 5" @click="addKid()">
          <img src="@/assets/img/plusimg.svg">
          Добавить ребенка
          </button>
      </div>
      <div class="kids-form-input-main__container">
        <div class="kids-form-input__container" v-for="kid,index in user.kids" :id="kid">
          <div class="user-form-input-label__div">
            <input type="text" placeholder=" " v-model="kid.name" class="kids__input">
            <label class="main-input__label">Имя</label>
          </div>
          <div class="user-form-input-label__div">
            <input type="number" placeholder=" "  v-model="kid.age" class="kids__input">
            <label class="main-input__label">Возраст</label>
          </div>
          <button class="delete__btn" @click="kidNaped(index)">Удалить</button>
        </div>
      </div>
      <div>
        <button class="save__btn" @click="setUser()">Сохранить</button>
      </div> 
    </div>
   </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name:"",
        age:"",
        kids:[
          
        ]
      }
    }
  },
  methods: {
    setUser(){
      this.$store.commit ('SET_USER',this.user)
    },
    addKid() {
    this.user.kids.push({ 
        name:"",
        age:""
      })
    console.log("sss")
    console.log(this.user.kids)
    },
    kidNaped(index) {
      this.user.kids.splice(index,1)
      console.log(index)
    }
  },
  mounted() {
      this.user = this.$store.state.user
  }
} 
</script>

<style>
*{
  transition: ease 0.3s;
}
.user-form-main__container{
  display: flex;
  flex-direction: column;
  padding: 0 375px;
  margin-top: 30px;
}

.user-form-input__container{
  display: flex;
  flex-direction: column;
  gap: 10px;

}
.main__input {
  height: 56px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
  box-sizing: border-box;
  padding: 26px 16px;
  outline: 0;
}
.user-form-input__container{
  margin-top: 20px;
}
.kids-form-btn__container {
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
}
.kids-form-input__container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 10px;
}
.kids__input {
  width: 260px;
  height: 56px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
  box-sizing: border-box;
  padding: 26px 16px;
  outline: 0;
}
.add__btn {
  font-family: 'Montserrat';
  border: 2px solid #01A7FD;
  border-radius: 100px;
  color: #01A7FD;
  background:white;
  width: 204px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7.51px;
}

.delete__btn {
  color: #01A7FD;
  background:white;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.save__btn {
  font-family: 'Montserrat';
  margin-top: 30px;
  background: #01A7FD;
  border-radius: 100px;
  color: white;
  width: 118px;
  height: 44px;
  border: solid;
}
.user-form-input-label__div {
  display: flex;
  flex-direction: column;
  position: relative;
}
.main-input__label {
  position: absolute;
  margin-top: 15px;
  margin-left: 16px;
  font-family: 'Montserrat';
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
}
.user-form-input-label__div > .main__input {
  
}

 .user-form-input-label__div > .main__input:focus + label {
  transform: translateY(-16px);
  
 }
.user-form-input-label__div > .kids__input {
  
}
.user-form-input-label__div > .kids__input:focus + label {
  transform: translateY(-16px);
  
 }
input:focus ~ label,
input:not(:placeholder-shown) ~ label
{
  transform: translateY(-16px)
}
</style>