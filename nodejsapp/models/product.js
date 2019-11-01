const fs = require('fs');
const t = require('path')
const path = require('../helpers/path');

const p = t.join(path, 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
           cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor (title) {
        this.title = title;

    }
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('error:' + err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}