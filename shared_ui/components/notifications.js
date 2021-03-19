import m from "mithril";
import stream from "mithril/stream";

class Notification {
  view(vnode) {
    return m('.notification', vnode.attrs.item.name)
  }
}

export default class SharedNotifications {
  constructor(vnode){
    this.items = stream([])
    this.fetch = this.fetch.bind(this);
    this.success = this.success.bind(this);
    this.view = this.view.bind(this);
    this.oninit = this.oninit.bind(this);
    this.render_items = this.render_items.bind(this);
  }
  oninit(){
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
    m.redraw()
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

