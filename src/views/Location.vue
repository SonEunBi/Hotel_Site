<template>
  <div class="location">
    <p class="location_title">오시는 길</p>

    <div id="map"></div>

    <p>충청남도 천안시 동남구 병천면 충절로 1600</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      var mapOptions = {
        center: new naver.maps.LatLng(36.7647, 127.2824),
        zoom: 17
      };

      var map = new naver.maps.Map('map', mapOptions);

      var marker = new naver.maps.Marker({
        map: map,
        position: mapOptions.center
      });
    },
  }
</script>

<style lang="scss" scoped>
.location {
  width: 100%;
  height: 100%;
  padding: 80px 0px;
  background: #EFF0F2;
  box-sizing: border-box;
  color: #343434;
  text-align: center;
  .location_title {
    font-weight: bold;
    font-size: 36px;
  }
  #map {
    width:1180px;
    height:640px;
    margin: 50px auto 28px auto;
  }
}
</style>