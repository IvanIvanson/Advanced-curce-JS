'use strict';

export default class ProductBasket {
    constructor(basket) {
      this.basket = {};
    }
/**
 * Метод добавляет продукт в объект basket.
 * @param {number} productId
 */
    addProductToObject(productId) {
        if (!(productId in basket)) {
            basket[productId] = 1;
        } else {
            basket[productId]++;
        }
    }
/**
 * Метод срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
    renderProductInBasket(productId) {
        let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
        if (productExist) {
            increaseProductCount(productId);
            recalculateSumForProduct(productId);
        } else {
            renderNewProductInBasket(productId);
        }
    }
/**
 * Метод отрисовывает новый товар в корзине.
 * @param {number} productId
 */
 renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
/**
 * Этот метод срабатывает когда добавляют новый товар в корзину.
 * @param {number} productId
 */
 addProductIntoBasket(productId) {
    addProductToObject(productId);
    renderProductInBasket(productId);
}

}







/**
 * Функция увеличивает количество товаров в строке в корзине.
 * @param {number} productId
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу.
 */
function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
function increaseProductsCount() {
    basketCounterEl.textContent++;
}



