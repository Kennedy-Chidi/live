(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{blogs:[]}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getBlogs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/blog");case 3:n=e.sent,t.blogs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getBlogs()}}),c=n(57),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-51"},[e("div",{staticClass:"div-block-53"},[e("h1",{staticClass:"heading-38"},[t._v("RECENT POSTS")]),t._v(" "),e("div",{staticClass:"div-block-52"}),t._v(" "),t._l(t.blogs,(function(n){return e("div",{key:n._id},[e("nuxt-link",{staticClass:"link-block-10 w-inline-block",attrs:{to:"/news-details/".concat(n._id)}},[e("h1",{staticClass:"heading-40"},[t._v(t._s(n.title))])]),t._v(" "),e("h1",{staticClass:"heading-41"},[t._v(t._s(t.formatDate(n.time)))]),t._v(" "),e("div",{staticClass:"div-block-52"})],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);