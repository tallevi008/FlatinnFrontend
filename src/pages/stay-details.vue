<template>
  <div class="space-con">&nbsp;</div>
  <!-- <div class="float-top-stay">
    <button class="order-form-submit"><div>Check availability</div></button>
    <div class="top-stay-menu-left"></div>
  </div> -->

  <div v-if="stayToEdit" class="details-main-con">
    <div class="details-stay-name">
      <span>{{ stayToEdit.name }}</span>
    </div>

    <div class="details-stay-short-info">
      <div>
        <div class="review-address-flex">
          <img
            class="review-address-flex-star"
            src="../assets/star.svg"
            alt=""
          />
          <span>&nbsp;&nbsp;{{ getAvarageRate }}&nbsp;&nbsp;</span
          ><span class="details-stay-short-info-address-reviews"
            >{{ getReviewsNum }} reviews
          </span>
          &nbsp;•&nbsp;&nbsp;<span class="details-stay-short-info-address"
            >&nbsp;{{ getStayCityAdress }}
          </span>
        </div>
      </div>
      <div class="details-stay-short-info-right">
        <div class="details-stay-short-info-right-flex1">
          <div>
            <img
              class="details-stay-short-info-right-imgs"
              src="../assets/share.svg"
              alt=""
            />
          </div>
          <div>
            <button class="share-btn">Share</button>
          </div>
        </div>
        <div class="details-stay-short-info-right-flex2">
          <div>
            <img
              class="details-stay-short-info-right-imgs"
              src="../assets/stay-details-like.svg"
              alt=""
            />
          </div>
          <div>
            <button class="save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery-grid">
      <div class="sub-pic1-con">
        <img class="main-pic" :src="galleryImg1" />
      </div>
      <div class="sub-pic2-con">
        <img class="sub-pic2" :src="galleryImg2" />
      </div>
      <div class="sub-pic3-con">
        <img class="sub-pic1" :src="galleryImg3" />
      </div>
      <div class="sub-pic4-con">
        <img class="sub-pic3" :src="galleryImg4" />
      </div>
      <div class="sub-pic5-con">
        <img class="sub-pic4" :src="galleryImg5" />
      </div>
    </div>

    <div class="middle-con">
      <!-- section 1 -->
      <div class="middle-con-sec1">
        <div class="first-line">
          <div class="first-line-1">
            <span class="first-line-title"
              >{{ getStayType }} hosted by {{ getHostName }}</span
            >
            <div class="spacer1">&nbsp;</div>
            <div class="first-line-2">
              {{ getStayCap }} guests · {{ getBedrooms }} bedroom ·
              {{ getBeds }} bed · {{ getBathrooms }} bathroom
            </div>
          </div>
          <div class="avatar1">
            <el-avatar :size="57" :src="mainPic" />
            <!-- //the real one
            <el-avatar :size="57" :src="getHostPicture" /> -->
          </div>
        </div>
        <hr />
        <div class="second-line">
          <div class="second-line-con4">
            <div class="second-line-1">
              <img
                class="services-img"
                src="../assets/house.svg"
                alt=""
              />&nbsp;&nbsp;&nbsp;Entire home
            </div>
            <div class="second-line-2">
              You’ll have the apartment to yourself.
            </div>
          </div>

          <div class="second-line-con2">
            <div class="second-line-3">
              <img
                class="services-img"
                src="../assets/location.svg"
                alt=""
              />&nbsp;&nbsp;&nbsp;Great location
            </div>
            <div class="second-line-4">
              Recent guests gave the location a 5-star rating.
            </div>
          </div>

          <div class="second-line-con3">
            <div class="second-line-5">
              <img
                class="services-img"
                src="../assets/stars.svg"
                alt=""
              />&nbsp;&nbsp;&nbsp;Enhanced Clean
            </div>
            <div class="second-line-6">
              This host has committed to our 5-step enhanced cleaning process.
            </div>
          </div>

          <div class="second-line-con4">
            <div class="second-line-7">
              <img
                class="services-img"
                src="../assets/calendar.svg"
                alt=""
              />&nbsp;&nbsp;&nbsp;Free cancellation up to 24 hours before
              check-in
            </div>
            <div class="second-line-8">feel free to be flexible</div>
          </div>
        </div>
        <hr />
        <div class="third-line">
          <div class="stay-desc-title">Stay description</div>
          <div class="stay-desc-info">{{ getStaySummary }}</div>
        </div>
        <hr />

        <!-- <div class="forth-line">
          <div class="forth-line-1">Amenities</div>

          <div class="forth-line-2 forth-line-flex1">
            <div class="amenities-item1">
              <img class="amenities-img" src="../assets/tv.svg" alt="" />
              &nbsp;&nbsp; TV
            </div>
            <div class="amenities-item2">
              <img class="amenities-img" src="../assets/wifi.svg" alt="" />
              &nbsp;&nbsp;Wifi
            </div>
          </div>
          <div class="forth-line-3 forth-line-flex2">
            <div class="amenities-item1">
              <img
                class="amenities-img"
                src="../assets/restaurant.svg"
                alt=""
              />
              &nbsp;&nbsp;&nbsp;Kitchen
            </div>
            <div class="amenities-item2">
              <img class="amenities-img" src="../assets/temp.svg" alt="" />
              &nbsp;&nbsp;Air conditioning
            </div>
          </div>
          <div class="forth-line-4 forth-line-flex3">
            <div class="amenities-item1">
              <img class="amenities-img" src="../assets/smoking.svg" alt="" />
              &nbsp;&nbsp;&nbsp;Smoking Allowed
            </div>
            <div class="amenities-item2">
              <img class="amenities-img" src="../assets/pets.svg" alt="" />
              &nbsp;&nbsp;Pets Allowed
            </div>
          </div>

          <button class="amenities-btn">Show all 9 amenities</button>
        </div> -->
        <div class="forth-line">
          <div class="forth-line-1">Amenities</div>

          <div class="amenities-grid">
            <div
              v-for="(amenity, index) in getAmenities"
              class="amenities-grid-item"
              :key="index + Math.random()"
            >
              <img class="amenities-imgs" :src="getAmenitiesImg(index)" />
              &nbsp;&nbsp;&nbsp;&nbsp;{{ amenity }}
            </div>
          </div>
          <button class="amenities-btn">
            Show all {{ getAmenitiesNum }} amenities
          </button>
        </div>
      </div>

      <!-- section 2 -->
      <div class="middle-con-sec2">
        <div class="order-dialog-main-con">
          <div class="order-form-top-con">
            <div>
              <label class="order-form-price">{{ getStayPrice }}</label>
              <label class="order-form-night">&nbsp;/&nbsp;</label>
              <label class="order-form-night">night</label>
            </div>

            <div class="order-form-star-rate">
              <img src="../assets/star.svg" alt="" />
              <label class="order-form-rate"
                >&nbsp;{{ getAvarageRate }} ·&nbsp;</label
              >
              <label class="order-form-rate-reviews"
                >{{ getReviewsNum }} reviews</label
              >
            </div>
          </div>
          <div class="order-form-middle-con">
            <div class="order-dates">
              <button class="order-form-check-in-btn" @click="toggleDateModal">
                <div class="check">CHECK-IN</div>
                <div class="add-dates">{{ getRangeStart }}</div>
              </button>
              <button class="order-form-check-out-btn" @click="toggleDateModal">
                <div class="check">CHECKOUT</div>
                <div class="add-dates">{{ getRangeEnd }}</div>
              </button>
            </div>
            <div class="guest-modallll">
              <button class="order-form-guest-btn" @click="toggleGuestModal">
                <div class="order-form-guest-btn-sec1">
                  <div class="check">GUESTS</div>
                  <div class="add-dates">{{ getTotalGuests }}</div>
                </div>
                <div class="order-form-guest-btn-sec2">
                  <el-icon
                    ><svg
                      v-if="!isGuestModalOpen"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-ba633cb8=""
                    >
                      <path
                        fill="currentColor"
                        d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
                      ></path>
                    </svg>
                    <svg
                      v-if="isGuestModalOpen"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      data-v-ba633cb8=""
                    >
                      <path
                        fill="currentColor"
                        d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                      ></path>
                    </svg>
                  </el-icon>
                </div>
              </button>
              <section v-if="isGuestModalOpen" class="guests-modal-order">
                <div class="adults guest-flex">
                  <div class="modal-txt">
                    Adults:
                    <input type="text" placeholder="Age 13+" disabled />
                  </div>
                  <div class="modal-btn">
                    <button class="guest-btn" @click="removeGuest('adult')">
                      -
                    </button>
                    <span class="guest-label">{{ this.guests.adults }}</span>
                    <button class="guest-btn" @click="addGuest('adult')">
                      +
                    </button>
                  </div>
                </div>
                <div class="kids guest-flex">
                  <div class="modal-txt">
                    Children:
                    <input type="text" placeholder="Ages 2-12" disabled />
                    <!-- <span class="span-input">Ages 2-12</span> -->
                  </div>
                  <div class="modal-btn">
                    <button class="guest-btn" @click="removeGuest('child')">
                      -
                    </button>
                    <span>{{ this.guests.kids }}</span>
                    <button class="guest-btn" @click="addGuest('child')">
                      +
                    </button>
                  </div>
                </div>
                <div class="guest-modal-btn-layout">
                  <button class="guest-close-btn" @click="toggleGuestModal">
                    Close
                  </button>
                </div>
              </section>
            </div>
          </div>
          <div v-if="isDateModalOpen" class="date-modal">
            <v-date-picker
              v-model="range"
              :min-date="new Date()"
              update-on-input
              @input="selectEvt"
              color="gray"
              is-range
              :columns="$screens({ default: 2, lg: 2 })"
            />

            <div class="date-modal-btn-layout">
              <button class="date-clear-btn" @click="clearDateModal">
                Clear dates
              </button>
              <button class="date-close-btn" @click="toggleDateModal">
                Close
              </button>
            </div>
          </div>
          <button
            v-if="submitBtnState"
            class="order-form-submit"
            @click="submitOrder"
          >
            <div>{{ getButtonText }}</div>
          </button>
          <button
            v-if="!submitBtnState"
            class="order-form-submit-disabled"
            @click="submitOrder"
          >
            <div>Reserved</div>
          </button>

          <div v-if="costsSectionShown">
            <div class="pre-charge-msg">You won't be charged yet</div>
            <div class="cost-calc">
              <div class="cost-calc-title">{{ getTotalNightsCalc }}</div>
              <div class="cost-elem">
                {{ getTotalNightCost }}
              </div>
            </div>
            <div class="cleaning-fee">
              <div class="cleaning-fee-title">Cleaning fee</div>
              <div class="cost-elem">{{ getCleaningFee }}</div>
            </div>
            <div class="service-fee">
              <div class="service-fee-title">Service fee</div>
              <div class="cost-elem">{{ getServiceFee }}</div>
            </div>
            <div class="total-price">
              <div>Total</div>
              <div>{{ getTotalCosts }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="fifth-line">
      <div class="fifth-line-1">
        <img src="../assets/star.svg" alt="" />&nbsp; {{ getAvarageRate }} ·
        {{ getReviewsNum }} reviews
      </div>
      <div class="review-rates-main-con">
        <div class="rate-sec1">
          <div class="fifth-line-2">
            <div>Cleanliness</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.cleanlinessPre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
                {{ getReviewsScore[2] }}
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.cleanliness }}
              </div>
            </div>
          </div>
          <div class="fifth-line-3">
            <div>Check-in</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.checkinPre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.checkin }}
              </div>
            </div>
          </div>
          <div class="fifth-line-4">
            <div>Location</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.locationPre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.location }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="rate-sec-middle">&nbsp;</div> -->
        <div class="rate-sec2">
          <div class="fifth-line-2">
            <div>Communication</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.communicationPre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.communication }}
              </div>
            </div>
          </div>
          <div class="fifth-line-3">
            <div>Accuracy</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.accuracyPre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.accuracy }}
              </div>
            </div>
          </div>
          <div class="fifth-line-4">
            <div>Value</div>
            <div class="progress-span-flex">
              <div>
                <el-progress
                  :percentage="getReviewsScore.valuePre"
                  color="black"
                  stroke-width="4"
                  text-inside="false"
                />
              </div>
              <div class="review-score-rating">
                &nbsp; {{ getReviewsScore.value }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fifth-line-5">
        <div class="review-users-con">
          <div class="review-users-grid">
            <div
              v-for="(review, index) in getReviews"
              class="review1-con"
              :key="index + Math.random()"
            >
              <div class="review-user-details">
                <div class="avatar1">
                  <el-avatar :size="57" :src="this.getRandProfilePic(index)" />

                  <!-- //the real one
                  <el-avatar :size="57" :src="review.by.imgUrl" /> -->
                </div>

                <div class="review-name">
                  {{ review.by.fullname }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="review-date">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ getDate(review.at) }}
                </div>
              </div>
              <div class="fifth-line-6">{{ getTxt(review.txt) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition name="slide-fade">
    <div v-if="getModalState" class="order-modal" ref="orderModal">
      <!-- <button @click="closeOrderModal" class="order-modal-btn">X</button> -->

      <div>Thank you for your order.</div>
      <!-- <div class="order-modal-btn-flex"> -->
      <!-- <button class="order-close-btn" @click="closeOrderModal">X</button> -->
      <button class="close-modal-fa-sign" @click="closeOrderModal">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <!-- <div><img class="order-close-btn-img" src="../assets/svg-x.svg" /></div> -->
      <!-- </div> -->
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      mainPic: null,
      //
      baseUrl:
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107833/assets/gallery/',
      // baseUrl: 'src/assets/gallery/',
      // baseUrl: '../../src/assets/gallery/',
      isSubmitted: false,
      isReadyToSubmit: true,
      isDateSelected: false,
      submitBtnState: true,
      guests: {
        adults: 0,
        kids: 0,
      },
      range: {
        start: Date.now(),
        end: Date.now(),
      },

      filterBy: {
        address: '',
        guests: {
          adults: 0,
          kids: 0,
        },
      },
      isGuestModalOpen: false,
      isCalanderModalOpen: false,
      isDateModalOpen: false,
      isModalEvtSet: false,
      stays: null,
      stayToEdit: null,
      displayMsg: 'Loading...',
      dialogVisible: true,
      form: {
        name: null,
      },
      costsSectionShown: false,
      modal: true,
      serviceFee: '5',
      totalPrice: null,
    };
  },
  methods: {
    update() {
      console.log('stay to update=', this.stayToEdit);
      this.$store.dispatch({ type: 'update', stayToUpdate: this.stayToEdit });
    },
    toggleDateModal() {
      this.isGuestModalOpen = false;
      this.isDateModalOpen = !this.isDateModalOpen;
    },
    toggleGuestModal() {
      this.isDateModalOpen = false;
      this.isGuestModalOpen = !this.isGuestModalOpen;
    },
    getDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    },
    getTxt(txt) {
      let addition = '';
      if (txt.length > 50) addition = '...';
      return txt.substr(0, 200) + addition;
    },
    selectEvt() {
      console.log('isDateSelected===', isDateSelected);
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    },
    getRandProfilePic(num) {
      let rand = this.getRandomIntInclusive(1, 40);
      // console.log('rand=', rand);
      return 'https://i.pravatar.cc/200?img=' + rand;
    },
    addGuest(type) {
      if (type === 'adult') {
        this.guests.adults++;
      }
      if (type === 'child') {
        this.guests.kids++;
      }
      this.checkReadyToOrder();
    },
    removeGuest(type) {
      if (type === 'adult') {
        if (this.guests.adults <= 0) return;
        this.guests.adults--;
      }
      if (type === 'child') {
        if (this.guests.kids <= 0) return;
        this.guests.kids--;
      }
      this.checkReadyToOrder();
    },

    closeDateModal() {
      this.isCalanderModalOpen = false;
    },
    clearDateModal() {
      this.range.start = null;
      this.range.end = null;
      this.checkReadyToOrder();
    },
    closeGuestModal() {
      this.isCalanderModalOpen = false;
    },
    checkReadyToOrder() {
      if (!this.$store.getters.getLoggedUser) {
        console.log('user not logged!!!');
        return false;
      }
      console.log('toal nights ======', this.getTotalNights());
      if (!this.getTotalNights() || this.getTotalNights() < 1) {
        this.costsSectionShown = false;
        return;
      }
      let totalGuests = this.guests.adults;
      if (!totalGuests) {
        this.costsSectionShown = false;
        return;
      }
      this.costsSectionShown = true;
      return true;
    },
    submitOrder() {
      if (!this.$store.getters.getLoggedUser) {
        alert('Please login');
        return;
      }
      if (!this.range.start || !this.range.end) {
        console.log('choose dates');
        return;
      }
      let totalGuests = this.guests.adults;
      if (!totalGuests) {
        console.log('You need to add atleast one adult guest!');
        return;
      }

      if (this.checkReadyToOrder() === true) {
        this.submitBtnState = false;
        console.log('Ready to order!!!');
      }

      let loggedInUser = this.$store.getters.getLoggedUser;

      console.log('loggedInUser=', loggedInUser);
      let buyerDetails = {
        _id: loggedInUser._id,
        // fullname: loggedInUser.fullname,
      };

      let stayDetails = {
        _id: this.stayToEdit._id,
        name: this.stayToEdit.name,
        price: this.stayToEdit.price,
      };

      let order = {
        hostId: '624b171a398f932c7d8c418c',

        totalPrice: this.totalPrice,
        buyer: buyerDetails,
        stay: stayDetails,
        startDate: this.range.start,
        endDate: this.range.end,
        guests: {
          adults: this.guests.adults,
          kids: this.guests.kids,
        },
        status: 'Pending',
      };

      console.log('order=', order);

      this.$store.dispatch({ type: 'submitOrder', order });
    },

    getTotalNights() {
      if (!this.range.start && !this.range.end) return;
      let totalDayMS = 1000 * 60 * 60 * 24;
      let dayStart = Date.parse(this.range.start);
      let dayEnd = Date.parse(this.range.end);
      let diffMS = dayEnd - dayStart;
      let totalNights = diffMS / totalDayMS;
      // console.log('totalNights=', totalNights);
      return totalNights;
    },
    getAmenitiesImg(index) {
      let amenitiesImgs = [
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/tv.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/dog.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/jacuzzi.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/kitchen.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/ac.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/wifi.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107850/assets/img/amenities/refrigerator.svg',
        'https://res.cloudinary.com/flat-inn/image/upload/v1649107848/assets/img/amenities/hair-dryer.svg',
      ];
      // console.log('curr amenity img=', amenitiesImgs[index]);
      return amenitiesImgs[index];
    },
    closeOrderModal() {
      this.$store.commit({
        type: 'orderModalClose',
      });
      this.isModalEvtSet = false;
      window.removeEventListener('click', this.handleClkOutside);
    },
    handleClkOutside(ev) {
      // this.$store.commit({
      //   type: 'orderModalClose',
      // });
      console.log('clicked handleClkOutside');
      console.log('ev=', ev);
      if (this.isModalEvtSet === false) return;
      if (ev.target) {
        let targetClass = ev.target.className;
        // if (targetClass.indexOf('order-modal') === -1) {
        if (this.$refs.orderModal.contains(ev.srcElement) === true) {
        }
        if (this.$refs.orderModal.contains(ev.srcElement) !== true) {
          window.removeEventListener('click', this.handleClkOutside);
          this.$store.commit({
            type: 'orderModalClose',
          });
          this.isModalEvtSet = false;
        }
      }
    },
  },
  computed: {
    galleryImg1() {
      if (this.stayToEdit.imgUrls[0])
        return this.baseUrl + this.stayToEdit.imgUrls[0];
    },
    galleryImg2() {
      if (this.stayToEdit.imgUrls[1])
        return this.baseUrl + this.stayToEdit.imgUrls[1];
    },
    galleryImg3() {
      if (this.stayToEdit.imgUrls[2])
        return this.baseUrl + this.stayToEdit.imgUrls[2];
    },
    galleryImg4() {
      if (this.stayToEdit.imgUrls[3])
        return this.baseUrl + this.stayToEdit.imgUrls[3];
    },
    galleryImg5() {
      if (this.stayToEdit.imgUrls[4])
        return this.baseUrl + this.stayToEdit.imgUrls[4];
    },
    getStayPrice() {
      return '$' + this.stayToEdit.price;
    },
    getStaySummary() {
      return this.stayToEdit.summary.toLowerCase();
    },
    getStayType() {
      if (this.stayToEdit.propertyType) {
        if (this.stayToEdit.roomType)
          return this.stayToEdit.propertyType + ' ' + this.stayToEdit.roomType;
      }
    },
    getHostName() {
      let fullname = this.stayToEdit.host.fullname;
      let name = fullname.split(' ')[0];
      return name;
    },
    getStayCap() {
      return this.stayToEdit.capacity;
    },
    getHostAvatar() {
      return this.stayToEdit.host.imgUrl;
    },
    getBedrooms() {
      if (this.stayToEdit.bedrooms) return this.stayToEdit.bedrooms;
    },
    getBeds() {
      if (this.stayToEdit.beds) return this.stayToEdit.bedrooms;
    },
    getBathrooms() {
      if (this.stayToEdit.bathrooms) return this.stayToEdit.bathrooms;
    },

    getRangeStart() {
      if (this.range.start && this.isDateSelected) {
        return new Date(this.range.start).toLocaleDateString();
      } else return 'Add dates';
    },
    getRangeEnd() {
      if (this.range.end && this.isDateSelected)
        return new Date(this.range.end).toLocaleDateString();
      else return 'Add dates';
    },
    getAmenitiesNum() {
      return this.stayToEdit.amenities.length;
    },

    getAvarageRate() {
      // let sum = 0;
      // for (var i = 0; i < this.stayToEdit.reviews.length; i++) {
      //   sum += this.stayToEdit.reviews[0].rate;
      // }

      // let avg = sum / ;
      // return avg;

      let rate = this.stayToEdit.reviewScores.rating;

      let rateDec = rate / 100;

      let finalRate = rateDec * 5;

      return finalRate.toFixed(2);
    },
    getReviewsNum() {
      return this.stayToEdit.numOfReviews;
    },

    getReviews() {
      return this.stayToEdit.reviews;
      let reviews = [
        {
          txt: 'am lacus lectus, mollis id porta eleifend, placerat at ex. Vivamus non malesuada lorem. Ut ultricies pretium urna et malesuada. Ut quis semper enim. N',
          rate: 3,
          date: '1.1.2001',
          by: {
            fullname: 'Ron Man',
            imgUrl: 'https://i.pravatar.cc/150?img=15',
          },
        },
        {
          txt: 'uctus. Morbi eget nibh cursus, luctus eros non, posuere velit. Pellentesque malesuada non erat vel aliquam. Lorem ipsum dolor sit amet, consecte',
          rate: 3,
          date: '1.1.2001',
          by: {
            fullname: 'Mike Tal',
            imgUrl: 'https://i.pravatar.cc/150?img=9',
          },
        },
        {
          txt: 'quis dictum augue. Nunc rhoncus a orci nec malesuada. Donec eleifend libero tortor, id ullamcorper sapien ullamcorper ut. Vestibulum et elit eg',
          rate: 2,
          date: '1.1.2001',
          by: {
            fullname: 'Gill boam',
            imgUrl: 'https://i.pravatar.cc/150?img=5',
          },
        },
        {
          txt: 'ellus, eget efficitur nisi dictum id. Duis eu enim sit amet purus interdum porttitor. Curabitur semper hendrerit faucibus. Quisque tempor id la',
          rate: 5,
          date: '1.1.2001',
          by: {
            fullname: 'Don Samo',
            imgUrl: 'https://i.pravatar.cc/150?img=3',
          },
        },
        {
          txt: 'us ac elit ut, mollis mollis mi. Phasellus ullamcorper lacus et leo viverra, vitae placerat est lobortis. Nullam ullamcorper commodo varius. Nunc ',
          rate: 4,
          date: '1.1.2001',
          by: {
            fullname: 'Avi ran',
            imgUrl: 'https://i.pravatar.cc/150?img=1',
          },
        },
        {
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 3,
          date: '1.1.2001',
          by: {
            fullname: 'Moti Cohen',
            imgUrl: 'https://i.pravatar.cc/150?img=2',
          },
        },
      ];
      return reviews;
    },

    getReviewsScore() {
      var reviewScores;
      console.log('testtttt reviewScores=', this.stayToEdit.reviewScores);

      //it's 10 scale
      var accuracy = this.stayToEdit.reviewScores.accuracy;
      var accuracyPre = (accuracy / 10) * 100;
      accuracy = accuracy.toFixed(2);
      var cleanliness = this.stayToEdit.reviewScores.cleanliness;
      var cleanlinessPre = (cleanliness / 10) * 100;
      cleanliness = cleanliness.toFixed(2);

      var checkin = this.stayToEdit.reviewScores.checkin;
      var checkinPre = (checkin / 10) * 100;
      checkin = checkin.toFixed(2);
      var communication = this.stayToEdit.reviewScores.communication;
      var communicationPre = (communication / 10) * 100;
      communication = communication.toFixed(2);
      var location = this.stayToEdit.reviewScores.location;
      var locationPre = (location / 10) * 100;
      location = location.toFixed(2);
      var value = this.stayToEdit.reviewScores.value;
      var valuePre = (value / 10) * 100;
      value = value.toFixed(2);

      //it's 100 scale (the data, not the output for the website)
      var rating = this.stayToEdit.reviewScores.rating;
      var ratingPre = (rating / 100) * 100;

      reviewScores = {
        accuracy,
        cleanliness,
        checkin,
        communication,
        location,
        value,
        rating,
        accuracyPre,
        cleanlinessPre,
        checkinPre,
        communicationPre,
        locationPre,
        valuePre,
        ratingPre,
      };
      console.log('reviewScores final=', reviewScores);
      return reviewScores;
    },
    getStayCityAdress() {
      return (
        this.stayToEdit.address.city + ' ' + this.stayToEdit.address.country
      );
    },
    getHostPicture() {
      this.stayToEdit.host.thumbnailUrl;
    },
    getButtonText() {
      let totalGuests = this.guests.adults + this.guests.kids;
      if (!this.isDateSelected || totalGuests === 0) {
        return 'Check availability';
      } else {
        return 'Reserve';
      }
    },
    getTotalGuests() {
      let totalGuests = this.guests.adults + this.guests.kids;

      if (totalGuests === 0) return 'Add guests';
      if (totalGuests === 1) return '1 guest';
      return this.guests.adults + this.guests.kids + ' guests';
    },
    getTotalNightCost() {
      if (!this.getTotalNights()) return;
      return (
        '$' + (this.stayToEdit.price * this.getTotalNights()).toLocaleString()
      );
    },
    getTotalNightsCalc() {
      let str = '';
      str +=
        '$' +
        this.stayToEdit.price.toLocaleString() +
        ' x ' +
        this.getTotalNights() +
        ' nights';
      console.log('last calc ====', str);
      return str;
    },
    getCleaningFee() {
      let cleaningFee = this.stayToEdit.cleaningFee;
      if (!cleaningFee) cleaningFee = 0;
      return '$' + cleaningFee.toLocaleString();
    },
    getServiceFee() {
      return '$' + this.serviceFee;
    },

    getTotalCosts() {
      if (!this.getTotalNights()) return;
      let totalNightCost = this.stayToEdit.price * this.getTotalNights();
      let cleaningFee = this.stayToEdit.cleaningFee;
      if (!cleaningFee) cleaningFee = 0;
      let serviceFee = parseInt(this.serviceFee);

      let totalCalc = totalNightCost + cleaningFee + serviceFee;
      this.totalPrice = totalCalc;
      return '$' + totalCalc.toLocaleString();
    },
    submitOrderStyle() {
      if (this.submitBtnState) {
        console.log('button style empty');
        return '';
      } else {
        console.log('button style NOT empty');
        return 'disabled:true;linear-gradient(to right, #919191 , #b0b0b0) !important';
      }
    },

    getAmenities() {
      let stayAmenities = [
        'TV',
        'Pets allowed',
        'Jacuzzi',
        'Kitchen',
        'Air conditioning',
        'WiFi',
        'Refrigerator',
        'Hair-dryer',
      ];
      return stayAmenities;
    },
    getCurrOrder() {
      if (this.$store.getters.getCurrOrder)
        return this.$store.getters.getCurrOrder;
    },
    getModalState() {
      // return true;
      console.log(
        'this.$store.getters.getModalState',
        this.$store.getters.getModalState
      );
      if (this.$store.getters.getModalState)
        return this.$store.getters.getModalState;
    },
  },
  watch: {
    range: {
      handler: function () {
        if (!this.range.start && !this.range.end) return;
        this.isDateSelected = true;
        this.toggleDateModal();
        this.checkReadyToOrder();
      },
      deep: true,
    },
    '$store.getters.getModalState': function (oldVer, newVer) {
      console.log(
        'this.$store.getters.getModalState changed!!!==========',
        newVer
      );
      if (this.isModalEvtSet === false) {
        window.addEventListener('click', this.handleClkOutside);
        setTimeout(this.closeOrderModal, 2500);
        this.isModalEvtSet = true;
      }
    },
    deep: true,
  },
  async created() {
    this.$store.commit({ type: 'setWantToSearch', isWantToSearch: false });
    this.$store.commit({ type: 'setCurrPage', page: 'stayDetails' });
    let mainPicNum = this.getRandomIntInclusive(1, 50);

    this.mainPic = 'https://i.pravatar.cc/200?img=' + mainPicNum;
    this.$store.commit({ type: 'setCurrPage', page: 'stayDetails' });
    // console.log('params=', this.$route.params);

    const { id } = this.$route.params;

    if (id) {
      const foundStay = await this.$store.dispatch({
        type: 'getById',
        stayId: id,
      });

      // console.log('foundStay main=', foundStay);
      if (foundStay) {
        this.stayToEdit = JSON.parse(JSON.stringify(foundStay));

        // console.log('found id=', this.stayToEdit);
      } else {
        console.log('no such id');
        this.displayMsg = 'no such id';
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 1rem;
}
.details-main-con {
  margin-top: 26px;
  /* margin 200px original */
  /* margin-left: 13vw;
  margin-right: 13vw; */
  /* margin-left: 13%;
  margin-right: 13%; */
  margin-left: 390px;
  margin-right: 390px;
}
@media only screen and (min-width: 1600px) and (max-width: 1700px) {
  .details-main-con {
    margin-left: 390px;
    margin-right: 390px;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .details-main-con {
    margin-left: 8%;
    margin-right: 8%;
  }
  .gallery-grid {
    width: 90%;
    /* background: yellow; */
  }
}
@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  .details-main-con {
    margin-left: 3%;
    margin-right: 3%;
  }
  .gallery-grid {
    width: 90%;
    /* background: blue; */
  }
}
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .details-main-con {
    margin-left: 3%;
    margin-right: 3%;
  }
  .gallery-grid {
    width: 90%;
    /* background: purple; */
  }
}
@media only screen and (min-width: 100px) and (max-width: 600px) {
  .details-main-con {
    margin-left: 0;
    margin-right: 0;
  }
  .gallery-grid {
    width: 100%;
    /* background: black; */
  }
  body {
    background-color: aqua;
  }
}
.order-dialog-main-con {
  position: sticky;
  top: 80px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  padding-top: 23px;
  width: 372px;

  /* min-height: 298px; */
  /* height: 278px; */
  height: fit-content;
  border-radius: 12px;
  margin-top: -4px;
  border: 1px solid #dddddd;
}
.order-form-price {
  font-weight: bold;
  font-size: 21px;
}
.order-form-submit {
  /* position: absolute; */
  /* z-index: -10; */
  margin: 0 auto;
  width: 322px;
  height: 48px;
  cursor: pointer;
  /* background: #e11a60; */

  background-image: linear-gradient(to right, #e61e4e, #d70466);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: airbnb-regular, sans-serif;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-form-submit-disabled {
  /* position: absolute; */
  /* z-index: -10; */
  margin: 0 auto;
  width: 322px;
  height: 50px;
  cursor: pointer;
  /* background: #e11a60; */

  background-image: linear-gradient(to right, #919191, #b0b0b0) !important;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  pointer-events: none;
  letter-spacing: 0.8px;
  font-family: airbnb-regular, sans-serif;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-form-top-con {
  /* background-color: blue; */
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.details-stay-name {
  margin-bottom: 12px;
  font-size: 23.5px;
  line-height: 27px;
  color: black;
  font-weight: 700;
}
.details-stay-short-info {
  margin-bottom: 23px;
  color: black;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0.4px;
  display: flex;
  justify-content: space-between;
}
.details-stay-short-info-address {
  color: gray;
  text-decoration: underline;
}
.details-stay-short-info-address-reviews {
  color: black;
  text-decoration: underline;
}
.details-stay-short-info-right {
  /* background-color: aqua; */
  /* height: 15px; */
  /* padding: 0px; */
  align-items: center;
  display: flex;
}
.middle-con {
  display: flex;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  margin-top: 52px;
  /* background-color: yellow; */
}
.middle-con-sec1 {
  width: 654px;
  /* height: 1875px; */
  /* background-color: blue; */
}
.middle-con-sec2 {
  display: flex;
  justify-content: flex-end;
  width: 466px;
  /* height: 1875px; */
  /* background-color: red; */
}

.amenities-btn {
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  width: 208px;
  height: 47px;
  color: black;
  background-color: white;
  line-height: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  margin-top: 30px;
  margin-bottom: 40px;
}
.amenities-btn:hover {
  text-decoration: underline;
  /* font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif; */
}
.section-calendar {
  width: 100%;
  height: 284px;
}
.section-calendar-btn {
  color: black;
}
.section-calendar-btn:hover {
  background-color: lightgray;
}

.order-form-check-in-btn {
  cursor: pointer;
  text-align: left;
  height: 56px;
  /* width: 50%; */
  width: 162px;
  margin: 0px !important;
  border-radius: 8px 0 0 0 !important;
  border: 1px solid gray;
  border-bottom: none;
}
/* .order-form-check-in-btn > * {
  margin: 5px;
} */
.order-form-check-out-btn {
  cursor: pointer;
  text-align: left;
  height: 56px;
  /* width: 50%; */
  width: 160px;
  margin: 0px !important;
  border-radius: 0 8px 0 0 !important;
  border: 1px solid gray;
  border-bottom: none;
  border-left: none;
}
.order-form-guest-btn {
  cursor: pointer;
  text-align: left !important;
  height: 57px;
  /* width: 100%; */
  /* background: purple; */
  width: 322px;
  border-radius: 0 0 8px 8px !important;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
}

.btn {
  cursor: pointer;
}
.order-form-middle-con {
  width: 365px;
  margin-bottom: 15px;
}
.check {
  font-weight: bold;
  font-size: 10px;
}
.add-dates {
  /* font-weight: bold; */
  /* font-weight: 100; */
  font-size: 14px;
  color: #757575;
}

.check,
.add-dates {
  /* margin-left: 5px; */
  margin: 5px;
}
.order-form-night {
  font-size: 17px;
}
.space-con {
  width: 100%;
  /* height: 65px; */
  height: 0px;
  background-color: blue;
}

.guest-flex {
  display: flex;
  justify-content: space-between;
}
.guest-flex-column {
  display: flex;
  flex-direction: column;
}

.guests-modal {
  /* float: left; */
  position: absolute;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  top: 8.5rem;
  right: 18.75rem;
  width: 21.87rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 18%);
  z-index: 2;
  padding: 1.25rem;
  gap: 20px;
}
.close-modal-btn {
  justify-self: flex-end;
  cursor: pointer;
  margin: 0;
  /* margin-bottom: -20px; */
  /* background: blue; */
  text-align: right;
  padding: 0;
  align-self: flex-end;
}

.modal-txt {
  display: flex;
  flex-direction: column;
}
.modal-btn {
  display: flex;
  align-items: center;
}
span {
  margin: 0 6px;
}
.btn {
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: #717171;
  text-align: center;
}
input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin: 0;
  line-height: 20px;
  outline: none;
}

.save-btn,
.share-btn {
  color: black;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
}
.date-modal {
  /* float: left; */
  position: absolute;

  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
}

span {
  margin-left: 0px;
}

hr {
  /* border: 0.1px solid #dddddd; */
  /* border: 1px solid #dddddd; */
  background-color: #dddddd;
  height: 1px;
  border: none;
}
.review-address-flex {
  /* background-color: red; */
  display: flex;
}

.services-img {
  width: 20px;
  height: auto;
}

.amenities-img {
  width: 19px;
  height: auto;
}
.order-form-guest-btn-sec1 {
  margin-top: 5px;
}

.order-form-guest-btn-sec2 {
  margin-right: 10px;
  display: flex;
  align-items: center;
  /* background-color: red; */
  height: 100%;
}

.guest-btn {
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: #717171;
  text-align: center;
  cursor: pointer;
  /* background: green; */
}

.date-modal-btn-layout {
  margin-top: 10px;
  /* background-color: green; */
  text-align: right;

  /* //     <button class="date-close-btn" @click="closeDateModal">Close</button>
    // <button class="date-clear-btn" @click="clearDateModal">Clear</button> */
}
.guest-close-btn,
.date-clear-btn {
  background-color: white;
  color: black;
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 0.7;
  color: rgb(0, 0, 0);
  text-decoration: underline;
  cursor: pointer;
}

.date-close-btn {
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  line-height: 18px;
  font-weight: 600;
  height: 34px;
  width: 70px;
  cursor: pointer;
}
.guest-modal-btn-layout {
  width: 100%;
  text-align: right;
  margin-top: -6px;
}

/* <div v-if="isReadyToSubmit" class="pre-charge-msg">You won't be charged yet</div>

          <div v-if="isReadyToSubmit">
            <div class="cost-calc">400$ * 3 nights</div>
            <div class="cleaning-fee">20$</div>
            <div class="service-fee">2$</div>
            <div class="total-price">1000</div> */

.pre-charge-msg {
  margin-bottom: 20px;
  margin-top: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: rgb(34, 34, 34);
  text-align: center;
}

.total-price,
.service-fee,
.cleaning-fee,
.cost-calc {
  margin-bottom: 7px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
}

.service-fee-title,
.cleaning-fee-title,
.cost-calc-title {
  text-decoration: underline;
}

.service-fee {
  margin-bottom: 28px;
}

.total-price {
  letter-spacing: 0.4px;
  font-weight: bold;
}
.cost-elem {
  /* text-decoration: none; */
  letter-spacing: 0.5px;
}
</style>
