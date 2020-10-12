<template>
  <div class="login">
    <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
      <a-form-model-item has-feedback label="账号" prop="username">
        <a-input v-model="ruleForm.username" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <a-button type="primary" @click="onTest">
      测试
    </a-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'login',
  components: {},
  props: {},
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validateUsername, trigger: 'change' }],
        password: [{ validator: validatePassword, trigger: 'change' }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['updateUser', 'updateToken']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post('api/v1/login', {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(data => {
              this.updateUser({
                permissions: data.permissions,
                userId: data.userId
              });
              this.updateToken(data.access_token);
              this.$router.replace('/');
            })
            .catch(error => {
              console.log(error);
            })
            .finally(data => {
              console.log('完成', data);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
    }
  }
};
</script>

<style lang="scss">
.login {
  .ant-form {
    width: 800px;
  }
}
</style>
