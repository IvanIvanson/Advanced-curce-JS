import ProductCardView from "./ProductCardView";
import ProductBasket from "./Basket";

export default class CatalogPresenter {
  constructor(catalogModel, cartModel, addBasket) {
    this.catalogModel = catalogModel;
    this.cartModel = cartModel;
    this.container = document.querySelector('.showcase')
    this.cards = [];
    this.basket = {};

    this.catalogModel.subscribe('onSet', (catalog) => {
      this.cards = catalog.map((product) => new ProductCardView(product))
      this.cards.forEach((card) => card.render(this.container))
      this.basket = catalog.map((product) => new ProductBasket(product))
      this.basket.forEach((card) => card.render(this.container))
    })
  }

  

  init() {
    this.catalogModel.init()
    this.cartModel.init()
  }
}