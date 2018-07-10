<template>
  <div class="hello">
    <input type="text" v-model="msg">
    <div class="wrapper" @mousewheel="scrollEvent">
      <ul class="content">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('ws://localhost:9093');
import BScroll from 'better-scroll';

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '',
            scroller: null,
            Y: null
        };
    },
    mounted() {
        var _this = this;
        socket.on('serverPush', function(data) {
            _this.msg = data.text;
        });

        setTimeout(() => {
            _this.scroller = new BScroll('.wrapper', {
                probeType: 2
                // momentum: false
            });
        });

        socket.on('serverScorllToY', function(data) {
            console.log(data);
            _this.scroller.scrollTo(0,data.y,1400)
        });

    },
    methods: {
        emitMsg() {
            socket.emit('sendmsg', { text: this.msg });
        },
        scrollEvent(e) {
            console.log(e);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.wrapper {
    width: 300px;
    height: 600px;
    border: 1px solid black;
    overflow: hidden;
}

h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}

li {
    // font-size: 60px;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid black;
}
a {
    color: #42b983;
}
</style>

