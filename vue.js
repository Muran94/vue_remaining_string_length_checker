var vm = new Vue({
  el: "#myapp",
  data: {
    comment: '',
    limit: 30,
    warning_threshold: 10,
    warn: false,
  },
  computed: {
    remaining: function() {
      return this.limit - this.comment.length;
    }
  },
  methods: {
    checkLength: function() {
      this.warn = this.remaining < this.warning_threshold;
    }
  }
})
