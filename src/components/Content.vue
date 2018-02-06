<template>
  <div id="content">
    <b-container>
      <b-col md="10" offset-md="1">
        <h1 class="title">{{ title }}</h1>
      </b-col>
      <b-col class="video-wrapper" md="8" offset-md="2">
        <div class="video-content">
          <div class="overlay"/>
          <img src="../assets/video.png" class="img-responsive" />
          <div class="img-play">
            <img src="../assets/play.png" />
          </div>
        </div>
      </b-col>
      <b-col md="10" offset-md="1">
        <p class="italic description">{{ description }}</p>
        <b-btn class="orange" v-b-modal.modalPrevent>{{ modalbutton }}</b-btn>
      </b-col>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      title: 'The worlds first reverse auction site, where prices DROP every few seconds!',
      description: 'Answer four simple questions to get an exclusive invitation, 30% OFF on top of your WINNING price, FREE shipping and chances to WIN amazing products!',
      modalbutton: 'Show Me The Questions!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  text-align: center;
  padding-bottom: 40px;
}
.title {
  font-size: 40px;
  font-weight: 600;
}
.description {
  font-size: 24px;
  font-weight: 300;
}

.italic {
  font-style: italic;
}
.video-wrapper {
  padding: 20px 80px 40px;
  background: url(../assets/shadow.png);
  background-position: center bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}
.video-content {
  position: relative;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.video-content .overlay {
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  width: 100%;
  height: 100%;
}
.img-responsive {
  width: 100%;
  height: auto;
}
.img-play {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
  padding: .5rem 1rem;
  font-weight: bold;
}
.orange {
  background-color: #f67121;
}
#modalPrevent .modal-content {
  background-color: #000;
}
@media only screen and (max-width: 768px) {
  .title {
    font-size: 24px;
  }
  .description {
    font-size: 16px;
  }
  .img-play img {
    width: 40px;
  }
  .video-wrapper {
    padding: 10px 40px 20px;
  }
}

</style>
