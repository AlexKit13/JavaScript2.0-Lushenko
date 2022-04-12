class Goods2 extends Goods {
    constructor(goodsImage, goodsName, goodsCount, sale) {
        super(goodsImage, goodsName, goodsCount);
        this.sale = sale;
    }
    draw(element) {
        document.querySelector(element).innerHTML = `<div>${this.image} ${this.name} ${this.count}${this.sale}</div>`
    }
}

let goods3 = new Goods2("<img src='img/2.png'>", "Banana", "9$", "true");

goods3.draw(".out-6");
