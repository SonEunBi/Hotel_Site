<template>
  <div class="reservation_complete">
    <div class="reservation_complete_header">
      <p class="text">호텔 예약 완료</p>
      <p class="close" @click="close">X</p>
    </div>

    <div class="reservation_content">
      <p class="text">서울 호텔 예약</p>

      <div class="line"></div>

      <div class="content">
        <img class="room-image" src="../assets/img_hotelroom.png" />
        <div class="room-content">
          <p class="room-name">{{reservationInfo.room}}</p>
        </div>
        <div class="room-price">
          <div class="text">총 예약금액</div>
          <span class="price">KRW</span>
          {{reservationInfo.price}}
        </div>
      </div>
    </div>

    <div class="reservation_confirm">
      <div class="row1">
        <div class="date">
          <p class="text">숙박 날짜</p>
          <p>{{reservationInfo.startDate}} ~ {{reservationInfo.endDate}}</p>
        </div>
        <div class="number">
          <p class="text">온라인 예약번호(예약확인시 필요하므로 반드시 알아두세요)</p>
          <p>{{reservationInfo.reservationNumber}}</p>
        </div>
      </div>
      <div class="row2">
        <div class="name">
          <p class="text">예약자 (예약확인시 필요하므로 반드시 알아두세요)</p>
          <p>{{reservationInfo.name}}</p>
        </div>
        <div class="phone">
          <p class="text">예약자 연락처</p>
          <p>{{reservationInfo.phone}}</p>
        </div>
      </div>
    </div>

    <div class="confirm">
      <div class="confirm" @click="confirm">완료</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      reservationInfo: Object,
    },
    data() {
      return {}
    },
    methods: {
      close() {
        this.$emit('close')
      },
      confirm() {
        this.$emit('complete')
      },
    },
    created() {},
  }
</script>

<style lang="scss" scoped>
  .reservation_complete {
    position: fixed;
    top: 230px;
    left: 473px;
    width: 974px;
    height: 620px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #D3D3D3;
    padding-left: 50px;
    padding-right: 36px;
    box-sizing: border-box;
    .reservation_complete_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
      .text {
        font-size: 28px;
        font-weight: bold;
        color: #343434;
      }
      .close {
        flex: 1;
        font-size: 28px;
        text-align: right;
        cursor: pointer;
      }
    }

    .reservation_content {
      margin-top: 47px;
      .text {
        font-weight: bold;
        font-size: 20px;
        color: #5b5b5b;
      }
      .line {
        width: 100%;
        height: 1px;
        background: #d3d3d3;
        margin-top: 9px;
      }
      .content {
        display: flex;
        margin-top: 22px;
        margin-bottom: 22px;
        .room-image {
          width: 107px;
          height: 67px;
        }
        .room-content {
          margin-left: 28px;
          .room-size {
            font-size: 14px;
            color: #5b5b5b;
            margin-bottom: 6px;
          }
          .room-name {
            font-size: 28px;
            color: #343434;
            font-weight: bold;
            margin-bottom: 22px;
          }
        }
        .room-price {
          flex: 1;
          font-size: 28px;
          font-weight: bold;
          color: #343434;
          padding-left: 183px;
          text-align: right;
          .text {
            font-size: 14px;
            color: #5b5b5b;
            margin-bottom: 10px;
          }
          .price {
            font-size: 18px;
          }
        }
      }
    }

    .reservation_confirm {
      width: 100%;
      border-top: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;
      .row1 {
        width: 100%;
        height: 93px;
        display: flex;
        border-bottom: 1px solid #d3d3d3;
        box-sizing: border-box;
        .date {
          width: 50%;
          border-right: 1px solid #d3d3d3;
          font-size: 18px;
          color: #343434;
          padding-top: 20px;
          padding-left: 30px;
          font-weight: bold;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 5px;
          }
        }
        .number {
          width: 50%;
          font-size: 18px;
          color: #343434;
          padding-top: 20px;
          padding-left: 30px;
          font-weight: bold;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 5px;
          }
        }
      }
      .row2 {
        width: 100%;
        height: 93px;
        display: flex;
        box-sizing: border-box;
        .name {
          width: 50%;
          border-right: 1px solid #d3d3d3;
          font-size: 18px;
          color: #343434;
          padding-top: 20px;
          padding-left: 30px;
          font-weight: bold;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 5px;
          }
        }
        .phone {
          width: 50%;
          font-size: 18px;
          color: #343434;
          padding-top: 20px;
          padding-left: 30px;
          font-weight: bold;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 5px;
          }
        }
      }
    }

    .confirm {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      margin-top: 20px;
      .confirm {
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