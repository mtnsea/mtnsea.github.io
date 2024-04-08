pageMixins.home = {
  mounted() {
    this.menuColor = true;
  },
  watch: {
    loading(newValue) {
      !newValue&&this.typedInit()
    }
  },
  methods: {
    homeClick() {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    },
    typedInit() {

      var typed = new Typed('#t-span', {
        strings: [
          'Hi！我是<b>Mtnsea</b></br> ^1000 很高兴renshi你',
          'Hi！我是<b>Mtnsea</b></br> ^1000 很高兴认识你',
        ],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 1000,
        smartBackspace: true,
        loop: false
      });
    }
  },
}