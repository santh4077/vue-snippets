Vue.component('navgation-top', {
  template: '#navigation'
});
// create a root instance
new Vue({
  el: '#example',
  props: ['my-component']
});
Vue.component('likes', {
  template: '#yourwish'
});
var yourwish = new Vue({
  el: '#yourwish',
  data: {
    counter: 0
  }
})