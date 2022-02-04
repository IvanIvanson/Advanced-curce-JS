import ProductList from './ProductList.js'

export default class CartModel extends ProductList {
  constructor(apiHandler, eventEmmiter) {
    super([])
    this.api = apiHandler
    this.eventEmmiter = eventEmmiter
  }

  fetch() {
    return this.api.getCart()
      .then((list) => {
        this.list = list
        return list
      })
      .then((list) => {
        this.eventEmmiter.emit('cartFeched', list)
        return list
      })
  }

  add(product, onError) {
    this.api.addToCart(
      () => {
        this.list.push(product)
      },
      onError,
      product
    )
  }

  remove(id, onError) {
    if(this.find(id)) {
      this.api.removeFromCart(
        () => {
          this.remove(id)
        },
        onError,
        this.list[index]
      )
    }
  }

}