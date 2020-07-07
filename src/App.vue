<template>
  <div id="app">
    <div class="app_top">
      <div class="app_customer" v-if="token">
        <span @click="logoutClick">로그아웃</span>
      </div>
      <div class="app_customer" v-else>
        <span @click="loginClick">로그인</span>
        |
        <span @click="signUpOpen">회원가입</span>
      </div>

      <img src="@/assets/HOTEL.png" @click="logoClick" />

      <div class="app_menu">
        <button @click="reservationClick">예약 확인</button>
        <router-link to="/location">오시는 길</router-link>
      </div>
    </div>

    <router-view />

    <login class="app_dialog login_dialog" v-if="loginShow" @close="loginClose" @signUp="signUpClick"></login>
    <signUp class="app_dialog signup_dialog" v-if="signUpShow" @close="signUpClose"></signUp>
    <hotelConfirm class="app_dialog comfirm_dialog" v-if="hotelConfirmShow" @hotelConfirm="hotelConfirm" @hotelComfirmClose="hotelComfirmClose"></hotelConfirm>
    <reservationConfirm v-if="reservationConfirmShow" :reservationInfo="reservationInfo" @reservationConfirm="reservationConfirm" @reservationConfirmClose="reservationConfirmClose"></reservationConfirm>
  </div>
</template>

<script>
  import login from './components/login.vue'
  import signUp from './components/signUp.vue'
  import hotelConfirm from './components/hotelConfirm'
  import reservationConfirm from './components/reservationConfirm'
  export default {
    components: {
      login,
      signUp,
      hotelConfirm,
      reservationConfirm,
    },
    data() {
      return {
        loginShow: false,
        signUpShow: false,
        hotelConfirmShow: false,
        reservationConfirmShow: false,

        reservationInfo: null,
      }
    },
    computed: {
      token() {
        return this.$cookie.get('userInfo')
      },
    },
    methods: {
      logoutClick() {
        this.$cookie.del('userInfo')
        this.$router.go(0)
      },
      loginClick() {
        this.loginShow = true
      },
      loginClose() {
        this.loginShow = false
      },
      signUpClick() {
        this.loginShow = false
        this.signUpShow = true
      },
      signUpClose() {
        this.signUpShow = false
      },
      signUpOpen() {
        this.signUpShow = true
      },
      logoClick() {
        this.$router.push({ name: 'Home' })
      },
      reservationClick() {
        this.hotelConfirmShow = true
      },
      hotelConfirm() {
        this.reservationInfo = this.$store.state.showReservationRoom
        this.hotelConfirmShow = false
        this.reservationConfirmShow = true
      },
      hotelComfirmClose() {
        this.hotelConfirmShow = false
      },
      reservationConfirm() {
        this.reservationConfirmShow = false
      },
      reservationConfirmClose() {
        this.reservationConfirmShow = false
      },
    },
  }
</script>

<style lang="scss">
  #app {
    position: relative;
    font-family: 'Spoqa Han Sans Regular';
  }

  .app_top {
    width: 1180px;
    height: 160px;
    padding-top: 18px;
    margin: 0px auto;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    .app_customer {
      position: absolute;
      right: 0px;
      font-size: 14px;
      color: #666666;
      span {
        cursor: pointer;
      }
    }
    img {
      cursor: pointer;
    }
    .app_menu {
      padding-top: 28px;
      button {
        margin-right: 90px;
        background: none;
        font-size: 20px;
        font-weight: bold;
        color: #686868;
      }
      a {
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        color: #686868;
      }
    }
  }

  .app_dialog {
    position: absolute;
    top: calc(50% - 310px);
  }
  .login_dialog {
    left: calc(50% - 487px);
  }
  .signup_dialog {
    left: calc(50% - 270px);
  }
  .comfirm_dialog p {
    left: calc(50% - 487px);
  }
  // custom
  .el-select-dropdown__item {
    height: 85px !important;
    line-height: 85px !important;
    border-bottom: 1px solid #d3d3d3;
    &:nth-last-child(1) {
      border-bottom: 0px;
    }
  }
  .home_room_option {
    height: 85px;
    display: flex;
    align-items: center;
    img {
      width: 107px;
      height: 67px;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
    }
  }
</style>