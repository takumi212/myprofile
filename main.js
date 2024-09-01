'use strict';








// 現在書いている途中。
'use strict';


const app = Vue.createApp({
    data() {
      return {
        appName: "デジタル時計",  // アプリ名
        clock: "00:00:00",    // 時計の文字列
        hover: false          // 画像のホバー状態 (以前のコードから)
      };
    },
    methods: {
      updateClock() {
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');
        this.clock = `${hours}:${minutes}:${seconds}`;
      }
    },
    mounted() {
      this.updateClock();  // 初期表示のために時計を更新
      setInterval(this.updateClock, 1000);  // 1秒ごとに時計を更新
    }
  });
  
  app.mount('#app');
  




