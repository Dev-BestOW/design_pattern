// Subject 라는 객체가 Observer 라는 종속 항목의 목록을 유지 관리하고,
// Subject 의 상태 변경 사항을 자동으로 Observer에게 자동으로 알리는 소프트 웨어 디자인 패턴

let Subject = {
  _state: 0,
  _observers: [],
  add: function(observer) {
      this._observers.push(observer);
  },
  getState: function() {
      return this._state;
  },
  setState: function(value) {
      this._state = value;
      for (let i = 0; i < this._observers.length; i++)
      {
          this._observers[i].signal(this);
      }
  }
};

let Observer = {
  signal: function(subject) {
      let currentValue = subject.getState();
      console.log(currentValue);
  }
}

Subject.add(Observer);
Subject.setState(10);