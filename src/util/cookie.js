/*
     옵션              내용           형식                                                                   지정 안했을경우 기본값       설명        
--------------    --------------   ------------------------------------------------------------------    -----------------------    ------------------------------------------------------------------------------------------------
expires           쿠키 만료일       new Date(year, month, day, hours, minutes, seconds, milliseconds)      브라우져 종료시점까지        쿠키 만료일을 정확하게 지정. new Date(2013,8,10,0,0,0) 와 같이 초까지만 지정하면 된다.
expires_day       쿠키 생존 일      숫자                                                                   브라우져 종료시점까지         쿠키 만료일을 현재시간으로부터 몇일후로 지정
expires_hour      쿠키 생존 시간    숫자                                                                    브라우져 종료시점까지        쿠키 만료일을 현재시간으로부터 몇시간후로 지정
domain            도메인           www.example.com 또는 sub.example.com 또는 example.com                   현재의 도메인                쿠키가 적용될 도메인으로 example.com 으로 지정시 앞에 모든 서브도메인에서 모두 사용 가능
path              경로             / 또는 /dir                                                             /                          쿠키가 적용될 디렉토리로 /dir 로 입력시 /dir로 시작하는(/direc , /dirpath 등) 모든 디렉토리에 적용
secure            ssl             true 또는 false                                                         false                      true로 설정하면 보안을 위해 ssl 즉 https 프로토콜일때만 쿠키 생성
today             오늘날짜         2018/02/21                                                              new Date                   형식에 맞는 시간을 서버로부터 받아야한다. new Date()로 선언한 날짜는 로컬기준이므로 권장 X
*/
// expires(만료일)설정의 경우 로컬 date를 기준으로 설정되므로 사용 시에 주의바람

var cookie = {
    cookie_arr: null,
  
    set: function(name, value, options) {
      options = options || {}
  
      this.cookie_arr = [encodeURIComponent(name) + '=' + value] // 원래 token 사용하지만 현재는 email로 사용하겠음
  
      //-- expires
      if (options.expires) {
        if (typeof options.expires === 'object' && options.expires instanceof Date) {
          var date = options.expires
          var expires = 'expires=' + date.toUTCString()
          this.cookie_arr.push(expires)
        }
      } else if (options.expires_day) {
        this.set_expires_date(options.expires_day, 24 * 60 * 60, options.today)
      } else if (options.expires_hour) {
        this.set_expires_date(options.expires_hour, 60 * 60, options.today)
      }
  
      //-- domain
      if (options.domain) {
        var domain = 'domain=' + options.domain
        this.cookie_arr.push(domain)
      }
  
      //-- path
      if (options.path) {
        var path = 'path=' + options.path
        this.cookie_arr.push(path)
      }
  
      //-- secure
      if (options.secure === true) {
        var secure = 'secure'
        this.cookie_arr.push(secure)
      }
  
      document.cookie = this.cookie_arr.join('; ')
    },
  
    get: function(name) {
      var nameEQ = encodeURIComponent(name) + '='
      var ca = document.cookie.split(';')
  
      for (let i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length))
      }
      return null
    },
  
    del: function(name, options) {
      options = options || {}
      options.expires_day = -1
      this.set(name, '', options)
    },
  
    set_expires_date: function(expires, time, today) {
      var date = new Date()
      if (today) {
        date = new Date(today)
      }
      date.setTime(date.getTime() + expires * time * 1000)
      var expires = 'expires=' + date.toUTCString()
      this.cookie_arr.push(expires)
    },
  }
  
  export default cookie
  