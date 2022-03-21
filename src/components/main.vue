<template>
  <div id="main">
    <div class="content">
      <h3>{{ recipe.name }}</h3>
      <Button class="content-btn" size="small" :type="interval ? 'primary' : 'info'" @click="btnClick">{{ interval ? '今天就烧这个！' : '干饭！' }}</Button>
      <div class="content-img">
        <img v-if="!interval" :src="recipe.coverImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
import recipeData from "@/components/data";

export default {
  name: 'Main',
  data() {
    return {
      recipe: {
        name: '今天烧什么菜呢'
      },
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
      this.recipe = recipeData[index]
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
  text-align: center;
}

.content-img {
  height: 300px;
  margin: 0 10%;
}

.content-img img {
  width: 100%;
}

.content-btn {
  display: inline-block;
  margin-bottom: 30px;
}
</style>
