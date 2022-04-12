class Goods {
    constructor(goodsImage, goodsName, goodsCount) {
        this.name = goodsName;
            this.image = goodsImage;
        this.count = goodsCount;
    }
    draw(element) {
document.querySelector(element).innerHTML = `<div>${this.image} ${this.name} ${this.count}</div>`
    }
}

 const goods2 = new Goods("<img src='img/1.png'>", "Apple", "12$");
goods2.draw('.out-4');

