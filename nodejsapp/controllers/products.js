const Product = require('../models/product');

exports.getProducts = (req,res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/product-list',{prods: products, docTitle: 'Shop', path: '/products'});
    });
};

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {docTitle: 'Página Inicial', path: '/'});
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart',{docTitle: 'Cart', path: '/cart'});
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{docTitle: 'Orders', path: '/orders'});
}