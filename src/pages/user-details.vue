<template>
  <section class="user-details-page">
    <div class="space-con">.</div>
    <div class="user-details-section">
      <div class="user-profile-con">
        <div class="user-profile">
          <div class="user-profile-picture">
            <img
              class="user-profile-picture-img"
              src="../assets/user.png"
              alt=""
            />
            <h5 class="user-profile-picture-update">Update photo</h5>
          </div>
          <img
            class="user-profile-svg-identification"
            src="../assets/identification.svg"
            alt=""
          />
          <h5 class="user-profile-identification-title">
            Identity verification
          </h5>
          <p class="user-profile-identification-desc">
            Show others you’re really you with the identity verification badge.
          </p>
          <button class="user-profile-identification-btn">Get the badge</button>
          <div class="user-profile-identification-confirmation">
            <h1 class="user-profile-identification-confirmation-head">
              {{ user.fullname }} confirmed
            </h1>
            <h5 class="user-profile-identification-confirmation-body">
              <img
                class="user-profile-svg-checkmark"
                src="../assets/checkmark.svg"
                alt=""
              />
              Phone number
            </h5>
          </div>
        </div>
      </div>
      <div class="user-details-con">
        <div class="user-details">
          <div class="user-details-top-con">
            <h1 class="user-details-name">Hi, I'm {{ user.fullname }}</h1>
            <h5 class="user-details-date">Joined on 2022</h5>
            <h5 class="user-details-edit">Edit profile</h5>
          </div>
          <h5 class="user-details-reviews">
            <img
              class="user-details-reviews-star"
              src="../assets/star.svg"
              alt=""
            />
            4 Reviews
          </h5>
          <div class="user-details-reviews-details">
            <h5 class="user-details-reviews-details-title">Reviews by you</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  created() {
    this.$store.commit({ type: 'setCurrPage', page: 'userDetails' });
    this.loggedInUser();
  },

  data() {
    return {
      user: {
        _id: 'u101',
        fullname: 'User 1',
        imgUrl: '/img/img1.jpg',
        username: 'user1',
      },
    };
  },
  methods: {
    loggedInUser() {
      const loggedUser = this.$store.getters.getLoggedUser;
      console.log('loggedUser', loggedUser);
      if (!loggedUser) return;
      else {
        this.user._id = loggedUser._id;
        this.user.fullname = loggedUser.fullname;
        this.user.imgUrl = loggedUser.imgUrl;
        this.user.username = loggedUser.username;
      }
    },
  },
};
</script>
