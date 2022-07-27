<template>
  <section class="main-login-layout">
    <header class="login-signup-header">Log in or sign up</header>
    <section class="login-option">
      <div class="login">
        <div class="form-title-container">
          <h3 class="form-title">Welcome to Flat-inn</h3>
        </div>
        <form v-if="!getLoggedUser">
          <!-- Sign-up -->
          <div
            v-if="!isLogin"
            class="input-container top-input top-input"
            :class="{ 'top-input': !isLogin }"
          >
            <input
              type="text"
              v-model.trim="fullname"
              ref="fullname"
              placeholder="Fullname"
              required
            />
          </div>
          <div class="input-container" :class="{ 'top-input': isLogin }">
            <input
              type="text"
              v-model.trim="username"
              ref="username"
              placeholder="Username"
              required
            />
          </div>
          <div
            class="input-container bottom-input"
            :class="{ 'no-border-top': !isLogin }"
          >
            <input
              type="password"
              v-model.trim="password"
              ref="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="input-container txt">
            <p>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. <span>Privacy Policy.</span>
            </p>
            <!-- Login -->
          </div>
          <div v-if="isLogin" class="input-container btn-container">
            <button class="login-btn" @click.prevent="onLogin">
              Login Demo User
            </button>
          </div>
          <div v-if="isLogin" class="input-container txt">
            <p>
              new to Flat-inn?
              <span @click="toggleMode">Create an account </span>
            </p>
          </div>
          <!-- Sign-up -->
          <div v-if="!isLogin" class="input-container btn-container">
            <button @click.prevent="onSignup" class="signin-btn">Signup</button>
            <div v-if="!isLogin" class="input-container txt">
              <p>
                already registered?
                <span @click="toggleMode">Sign-in</span>
              </p>
            </div>
          </div>
        </form>
        <div class="input-container btn-container" v-if="getLoggedUser">
          You have already logged in: {{ getLoggedUser.fullname }}
          <button class="logout-btn" @click="onLogout">Log-out</button>
        </div>
      </div>
    </section>
    <!-- SSO buttons -->
    <!-- <section class="login-option">
      <div class="sso-login">
        <div class="input-container top-input bottom-input">
          <button>Continue with Facbook</button>
        </div>
        <div class="input-container top-input bottom-input">
          <button>Continue with Google</button>
        </div>
        <div class="input-container top-input bottom-input">
          <button>Continue with Apple</button>
        </div>
        <div class="input-container top-input bottom-input">
          <button>Continue with Mail</button>
        </div>
      </div>
    </section> -->
  </section>
</template>

<script>
export default {
  created() {
    this.$store.commit({ type: 'setWantToSearch', isWantToSearch: false });
    this.$store.commit({ type: 'setCurrPage', page: 'loginSignup' });
  },
  data() {
    return {
      isLogin: true,
      fullname: null,
      username: 'Tal',
      password: '123456',
    };
  },
  computed: {
    getLoggedUser() {
      // let loggedUser = this.$store.getters.getLoggedUser;
      // if (!loggedUser) {
      //   return false;
      // }
      // return loggedUser.fullname;
      this.$store.commit('loadLoggedInUser');
      return this.$store.getters.getLoggedUser;
    },
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin;
    },
    async onSignup() {
      try {
        const user = await this.$store.dispatch({
          type: 'signup',
          userCred: {
            fullname: this.fullname,
            username: this.username,
            password: this.password,
          },
        });
      } catch (err) {
        console.log('err', err);
      } finally {
        this.fullname = null;
        this.username = null;
        this.password = null;
      }
    },
    async onLogin() {
      try {
        const user = await this.$store.dispatch({
          type: 'login',
          userCred: { username: this.username, password: this.password },
        });
      } catch (err) {
        console.log('err', err);
      } finally {
        this.username = null;
        this.password = null;
      }
    },
    async onLogout() {
      try {
        const result = await this.$store.dispatch({ type: 'logout' });
        this.$router.push('/');
      } catch (err) {
        console.log('error in logout=', err);
      }
    },
  },
};
</script>

<style scoped></style>
