<template>
  <div id="main">
    <div class="content">
      <h3>{{ recipeName }}</h3>
      <Button size="small" :type="interval ? 'primary' : 'info'" @click="btnClick">{{ interval ? '今天吃这个！' : '干饭！' }}</Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
import recipeData from "@/components/data";

export default {
  name: 'HelloWorld',
  data() {
    return {
      recipeName: '这顿吃啥呢？',
      interval: undefined,
    }
  },
  components: {
    Button
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    start() {
      this.interval = setInterval(this.intervalFun, 50);
    },
    stop() {
      clearInterval(this.interval)
      this.interval = undefined
    },
    intervalFun() {
      const index = this.random(0, recipeData.length - 1);
      this.recipeName = recipeData[index].name
    },
    btnClick() {
      if (this.interval) {
        this.stop()
      } else {
        this.start()
      }
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  height: 100%;
  display: flex;
  align-items: center;
}

.content {
  margin: 0 auto;
}
</style>
