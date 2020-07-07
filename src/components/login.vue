<template>
  <div class="hotel_login">
    <div class="hotel_login_header">
      <p class="text">호텔에 오신 것을 환영합니다.</p>
      <p class="close" @click="close">X</p>
    </div>

    <div class="hotel_login_content">
      <div class="login">
        <p class="text">로그인</p>

        <div class="email">
          <p class="text">이메일</p>
          <input type="text" class="input" v-model="email" />
        </div>

        <div class="password">
          <p class="text">패스워드</p>
          <input type="password" class="input" v-model="password" />
        </div>

        <!-- <div class="save">
          <el-checkbox v-model="checked">사용자 정보 저장</el-checkbox>
        </div> -->

        <button class="login_btn" @click="login">로그인</button>
      </div>

      <div class="signUp">
        <p class="text">HOTEL 회원 가입</p>

        <img src="../assets/img_join.png" class="img" />

        <p class="text_price">- 최저 요금 혜택</p>

        <p class="text_benefit">- 그 외 여러가지 혜택을 누리세요.</p>

        <button class="signUp_btn" @click="signUp">가입하기</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        // checked: false,
      }
    },
    methods: {
      login() {
        if (this.email.trim() === '') {
          alert('이메일을 입력해주세요')
          return
        }

        if (this.password.trim() === '') {
          alert('비밀번호를 입력해주세요')
          return
        }

        let data = this.$ls.get('customerList')

        if (data === null) {
          alert('가입되지 않은 회원입니다')
          return
        }

        let customerList = JSON.parse(data)
        let check = customerList.filter(customer => customer.email === this.email)

        if (check.length !== 1) {
          alert('가입되지 않은 회원입니다')
          return
        }

        // 로그인
        if (check[0].password !== this.password) {
          alert('비밀번호 오류입니다.')
          return
        }

        // 로그인 정보 저장
        this.$cookie.set('userInfo', this.email)

        // 로그인 성공시 창닫기
        this.$emit('close')
        this.$router.go(0);
      },
      signUp() {
        this.$emit('signUp')
      },
      close() {
        this.$emit('close')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .hotel_login {
    width: 974px;
    height: 620px;
    background: #ffffff;
    box-sizing: border-box;
    border: 1px solid #D3D3D3;
    padding-left: 50px;
    padding-right: 44px;
    .hotel_login_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
      margin-bottom: 68px;
      .text {
        flex: 1;
        font-size: 28px;
        font-weight: bold;
        color: #343434;
        text-align: left;
      }
      .close {
        font-size: 28px;
        text-align: right;
        cursor: pointer;
      }
    }

    .hotel_login_content {
      display: flex;
      width: 100%;
      .login {
        width: 50%;
        border-right: 1px solid #d3d3d3;
        .text {
          font-size: 24px;
          color: #343434;
          font-weight: bold;
          margin-bottom: 28px;
        }

        .email {
          width: 100%;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 10px;
          }
          .input {
            width: 350px;
            height: 46px;
            padding-left: 5px;
            font-size: 20px;
          }
        }
        .password {
          width: 100%;
          margin-top: 36px;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 10px;
          }
          .input {
            width: 350px;
            height: 46px;
            padding-left: 5px;
            font-size: 20px;
          }
        }
        .save {
          width: 100%;
          margin-top: 34px;
        }
        .login_btn {
          width: 359px;
          height: 54px;
          margin-top: 92px;
          background: #143256;
          font-size: 18px;
          color: #ffffff;
          &:active {
            background: #21497a;
          }
        }
      }

      .signUp {
        width: 50%;
        padding-left: 60px;
        .text {
          font-size: 24px;
          color: #343434;
          font-weight: bold;
          margin-bottom: 14px;
        }
        .img {
          width: 350px;
          height: 202px;
          margin-bottom: 22px;
        }
        .text_price {
          font-size: 14px;
          color: #343434;
          margin-bottom: 10px;
        }
        .text_benefit {
          font-size: 14px;
          color: #343434;
        }
        .signUp_btn {
          width: 359px;
          height: 54px;
          margin-top: 29px;
          background: #ffffff;
          border: 1px solid #343434;
          font-size: 18px;
          color: #343434;
          &:active {
            background: #f2f3f5;
          }
        }
      }
    }
  }
</style>