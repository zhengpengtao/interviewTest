<template>
  <div class="hello">
    <div id="send" @click="send">发送消息</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      ws: null
    }
  },
  mounted() {
    this.ws = new WebSocket('ws://localhost:8082')
    this.ws.onopen = function(e) {
      console.log('客户端（client）：与服务器的连接已打开')
    }
  },
  methods: {
    send () {
      this.ws.send('ddd');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
