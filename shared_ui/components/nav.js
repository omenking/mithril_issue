import m from "mithril";

export default class Nav {
  constructor(vnode){
  }
  view() {
    return m('nav', m('ul',[
      m('li',m(m.route.Link,{href: '/hello'}, 'Hello Page')),
      m('li',m(m.route.Link,{href: '/world'}, 'World Page'))
    ]))
  }
}
