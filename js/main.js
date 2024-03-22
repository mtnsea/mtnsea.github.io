const app = Vue.createApp({
  data() {
      return {
        loading : true,
        pageLoaded: false,
        loadingShownTime: false
      };
  },
  created() {
    setTimeout(() => {
      this.loadingShownTime = true;
      if (this.pageLoaded) {
        this.loading = false;
        NProgress.done();
      }
    }, 650);
    window.onload = () => {
      this.pageLoaded = true;
      if (this.loadingShownTime) {
        this.loading = false;
        NProgress.done();
      }
    };
  },
  mounted() {},
  methods: {}
});
app.mount("#app");