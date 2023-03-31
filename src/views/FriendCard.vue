<template>
  <div class="main-block">
    <div class="friendcard">
      <div class="friendcard__top">
        <div class="friendcard__bar">
          <div class="friendcard__bar_back">
            <img src="@/assets/back-icon.png" />
          </div>
          <div class="friendcard__bar_else">
            <img src="@/assets/else-icon.png" />
          </div>
        </div>
        <div class="friendcard__prof">
          <div class="friendcard__prof_img"><img src="../assets/pexels-anna-shvets.png"></div>
          <p class="friendcard__prof_name">{{ profile.name }}</p>
          <p class="friendcard__prof_mail">{{ profile.mail }}</p>
          <p class="friendcard__prof_birth">{{ profile.birth }}</p>
        </div>
      </div>
      <div class="friendcard__wish">
        <FriendCardListItem 
          :listitem="profile.wish"
        />
        <FriendCardListItem 
          :listitem="profile.tobook"
        />
      </div>
      <div class="friendcard__other">
        <FriendCardListItem 
          :listitem="profile.friends"
        />
        <FriendCardListItem 
          :listitem="profile.state"
        />
        <FriendCardListItem 
          :listitem="profile.help"
        />
      </div>
      <div class="friendscard__manage"></div>
      <div class="friendscard__bottom"></div>
    </div>
</div>
</template>

<script>
import FriendCardListItem from '@/components/FriendCardListItem.vue'
export default {
  name: 'FriendCard',
  components: {
    FriendCardListItem
  },
  data() {
    return {
      profile: {
        name: 'Катя Белая',
        mail: 'hhhhhh@gmail.com',
        birth: '16.09.1997',
        wish: {
          icon: require('/src/assets/wish-icon.svg'),
          title: 'Мои желания',
          info: '5'
        },
        tobook: {
          icon: '',
          title: 'Мои бронирования',
          info: '5'
        },
        friends: {
          icon: require('/src/assets/friends-icon.png'),
          title: 'Мои друзья',
          info: '5'
        },
        state: {
          icon: require('/src/assets/state-icon.png'),
          title: 'Статус',
          info: 'Открыто для всех'
        },
        help: {
          icon: '',
          title: 'Помощь/поддержка',
          info: ''
        },

      }
    }
  }
}
</script>

<style lang="scss">
.main-block {
  width: 375px;
  height: 812px;
  display: flex;
}
.friendcard {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__top {
    width: 100%;
    background: #2C2C2C;
    border-radius: 40px 40px 0 0;
    padding-bottom: 111px;
  }
  &__bar {
    display: flex;
    justify-content: space-between;
    padding: 55px 20px 15px 20px;
    &_back, &_else {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(249, 249, 249, 0.1);
      box-shadow: 0px 4px 70px rgba(35, 35, 35, 0.3);
      backdrop-filter: blur(25px);
      border-radius: 7px;
    }
  }
  &__prof {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #FDFFFF;
    &_name {
      margin-top: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    &_mail, &_birth {
      margin-top: 5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.01em;
    }
    &_img {
      max-width: 120px;
      display: flex;
      margin: 0 auto;
      & img {
        width: 100%;
      }

    }
  }
  &__wish {
    width: 335px;
    display: flex;
    flex-direction: column;
    margin: 41px 20px 10px 20px;
    filter: drop-shadow(0px 20px 120px rgba(35, 35, 35, 0.05));
    backdrop-filter: blur(25px);
    border-radius: 15px
  }
  &__other {
    display: flex;
    flex-direction: column;
    // margin: 41px 20px 10px 20px;
    filter: drop-shadow(0px 20px 120px rgba(35, 35, 35, 0.05));
    backdrop-filter: blur(25px);
  }
  &__bottom {
    background: #F5F5F5;
  }
}

</style>
