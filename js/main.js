const app = Vue.createApp({
  mixins: Object.values(pageMixins),
  data() {
      return {
        loading : true,
        pageLoaded: false,
        loadingShownTime: false,
        scrollTop: 0,
        hiddenMenu: false,
        menuColor: false,
        showMenuPage: false,
      };
  },
  created() {
    // 保证loading至少保持650ms
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let wrap = this.$refs.homePostsWrap;
      let newScrollTop = document.documentElement.scrollTop;
      if (this.scrollTop < newScrollTop && this.scrollTop !== 0) {
        this.hiddenMenu = true;
      } else {
        this.hiddenMenu = false;
      }
      if(this.scrollTop > window.innerHeight - 5 && this.scrollTop < window.innerHeight + 5) {
        this.hiddenMenu = false;
      }
      if (wrap) {
        if (newScrollTop <= window.innerHeight - 100) {
          this.menuColor = true;
        } else {
          this.menuColor = false;
        }
      }
      this.scrollTop = newScrollTop;
    },
    openMenu() {
      this.showMenuPage = !this.showMenuPage
    }
  }
});
app.mount("#app");