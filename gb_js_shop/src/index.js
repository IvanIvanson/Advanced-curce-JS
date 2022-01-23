import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
// import './scss/style.scss';
import  './style.css';
// import _ from 'lodash';
import './style.scss';
const productList = getProductList(20);

renderGoodsList(productList);