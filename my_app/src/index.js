import m from "mithril";
import stream from "mithril/stream";
import Nav from 'shared/components/nav'
import SharedNotifications from 'shared/components/notifications'

class Notification {
  view(vnode) {
    return m('.notification', vnode.attrs.item.name)
  }
}

class AppNotifications {
  constructor(vnode){
    this.items = stream([])
    this.fetch = this.fetch.bind(this);
    this.success = this.success.bind(this);
    this.view = this.view.bind(this);
    this.render_items = this.render_items.bind(this);
    this.fetch()
  }
  fetch(){
    m.request({
      method: 'GET',
      url: '/api/notifications'
    }).then(this.success)
  }
  success(data){
    console.log('data',data)
    this.items(data)
  }
  render_items(){
    const elements = []
    this.items().forEach((item) => {
      elements.push(m(Notification, {item: item}))
    })
    console.log('elements',elements)
    return elements;
  }
  view() {
    return m('.notifications',[
      this.render_items()
    ])
  }
}

class RedrawButton {
  constructor(vnode) {
  }
  click(){
    m.redraw()
  }
  view() {
    return m('button',{onclick: this.click},'Redraw')
  }
}

class Hello {
  constructor(vnode) {
  }
  view() {
    return m('div', [
      m(Nav),
      m(RedrawButton),
      m(AppNotifications),
      m(SharedNotifications)
    ])
  }
}

class World {
  constructor(vnode) {
  }
  view() {
    return m('div', [
      m(Nav),
      'World!'
    ])
  }
}

m.route.prefix = ''
m.route(document.body,'/hello',{
  '/hello': Hello,
  '/world': World
})
