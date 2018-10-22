// component/testcomponent/testcomponent.js
const computedBehavior = require('./miniprogram-computed.js');

Component({
  // behaviors: [require('index.js')],

/**
   * 组件的属性列表
   */
   externalClasses: ['my-class'],

  properties: {
    innerText: {
      type: String,
      value: 'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    a:0,
  },
  computed: {
    b() {
      return this.data.a + 100
    },
  },
  behaviors: [computedBehavior],
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      // console.log(this.data.b)
      this.setData({
        a: ++this.data.a,
        b: this.data.a+100,
      })
    }
  }
})
