var storage = chrome.storage.local;
var vm = new Vue({
  el: '#browser',
  data: {
    view: 'browser',
    config: {
      bucket: '',
      operator: '',
      password: ''
    }
  },
  created: function() {
    storage.get('config', result => {
      this.config = Object.assign({}, this.config, result.config);
    });
  },
  watch: {
    'config': {
      handler: config => storage.set({ config: config }),
      deep: true
    }
  }
});