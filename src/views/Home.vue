<template>
  <div class="home">
    <a-button type="primary" @click="onTest">
      测试
    </a-button>
    <a-button type="primary" @click="onLogin">
      login
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    onTest() {
      this.$http
        .get('api/v1/current')
        .then(data => {
          console.log('then', data);
        })
        .catch(error => {
          console.log('catch', error);
        })
        .finally(data => {
          console.log('完成', data);
        });
    },
    onLogin() {
      this.$router.push('login');
    }
  }
};
</script>
