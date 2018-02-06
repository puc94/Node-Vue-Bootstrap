// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import { Navbar } from 'bootstrap-vue/es/components';
import { Layout } from 'bootstrap-vue/es/components';
import { Modal } from 'bootstrap-vue/es/components';
import { Button } from 'bootstrap-vue/es/components';
import { Form } from 'bootstrap-vue/es/components';
import { FormInput } from 'bootstrap-vue/es/components';
import { FormSelect } from 'bootstrap-vue/es/components';

Vue.use(FormSelect);
Vue.use(FormInput);
Vue.use(Form);
Vue.use(Button);
Vue.use(Modal);
Vue.use(Layout);
Vue.use(Navbar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  methods: {
    parentHandler: function () {
    }
  }
})
