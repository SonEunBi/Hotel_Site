<template>
  <div class="hotel_confirm">
    <div class="hotel_confirm_header">
      <p class="text">예약 확인</p>
      <p class="close" @click="close">X</p>
    </div>

    <p class="confirm_text">
      해당 양식을 작성하시면 예약이 검색되며
      <br />예약 내용을 확인하거나 수정 또는 취소하실 수 있습니다.
    </p>

    <div class="reservation_number">
      <p class="text">온라인 예약번호</p>

      <input type="text" class="input" v-model="reservationNumber" />
    </div>

    <div class="reservation_name">
      <p class="text">성명</p>

      <input type="text" class="input" v-model="name" />
    </div>

    <div class="reservation_retrieve">
      <div class="retrieve" @click="retrieve">조회</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        reservationNumber: '',
        name: '',
      }
    },
    methods: {
      close() {
        this.$emit('hotelComfirmClose')
      },
      retrieve() {
        let data = this.$ls.get('reservationList')
        let list = JSON.parse(data)

        if (list === null || list.length === 0) {
          alert('예약정보가 없습니다')
          return
        }

        let exists = list.filter(
          info =>
            info.reservationNumber == this.reservationNumber &&
            info.name == this.name
        )

        if (exists.length === 0) {
          alert('예약정보가 없습니다')
          return
        }

        this.$store.commit('setShowReservationRoom', exists[0])

        this.$emit('hotelConfirm')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .hotel_confirm {
    top: 230px;
    left: 690px;
    width: 540px;
    height: 505px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #D3D3D3;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 91px;
    padding-right: 44px;
    .hotel_confirm_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
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
    .confirm_text {
      font-size: 12px;
      color: #727272;
      margin-top: 8px;
      margin-bottom: 34px;
    }

    .hotel_room {
      font-size: 14px;
      color: #727272;
      .text {
        margin-bottom: 10px;
      }
      .select {
        width: 350px;
      }
    }

    .reservation_number {
      font-size: 14px;
      color: #727272;
      margin-top: 24px;
      .text {
        margin-bottom: 10px;
      }
      .input {
        width: 350px;
        height: 40px;
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 15px;
      }
    }

    .reservation_name {
      font-size: 14px;
      color: #727272;
      margin-top: 24px;
      .text {
        margin-bottom: 10px;
      }
      .input {
        width: 350px;
        height: 40px;
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 15px;
      }
    }

    .reservation_retrieve {
      width: 100%;
      text-align: center;
      margin-top: 69px;
      .retrieve {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        height: 54px;
        font-size: 18px;
        color: #ffffff;
        background: #143256;
        cursor: pointer;
      }
    }
  }
</style>