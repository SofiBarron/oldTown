const productList = [];

class Product {
    constructor (id, name, author, coverPicture, price, stock) {
        this.id = parseInt(id);
        this.name = name;
        this.author = author;
        this.coverPicture = coverPicture;
        this.price = parseFloat(price);
        this.stock = parseInt(stock);
    }
}

productList.push (new Product(1, 'Beastars Vol. 1', 'Paru Itagaki', 'images/Beastars.jpg' , 900, 7000));
productList.push (new Product(2, 'Slam Dunk Vol. 5', 'Takehiko Inoue', 'images/slamDunkVol5.jpg', 895, 7000));
productList.push (new Product(3, 'Atelier of Witch Hat Vol. 1', 'Kamome Shirahama', 'images/atelierVol1.jpg', 525, 7000));
productList.push (new Product(4, 'Solanin', 'Inio Asano', 'images/solanin.jpg', 990, 7000));
productList.push (new Product(5, 'The Sandman Vol. 1','Neil Gaiman and Sam Keith', 'images/sandmanVol01.jpg', 1906.14, 7000));
productList.push (new Product(6, 'The Old Guard Vol. 2', 'Greg Rucka and Leandro Fernandez','images/oldGuard2.jpg', 1826.5, 7000));
productList.push (new Product(7, 'Teen Titans: Beast Boy', 'Kami Garcia and Gabriel Picolo', 'images/beastBoyRaven.jpg', 1580, 7000));
productList.push (new Product(8, 'Middlewest Vol. 1', 'Skottie Young and Jorge Corona', 'images/middlewestVol1.jpg', 1899, 7000));
productList.push (new Product(9, 'Six of Crows', 'Leigh Bardugo', 'images/sixOfCrows.jpg', 1798.5, 7000));
productList.push (new Product(10, 'Season of Storms', 'Andrzej Sapkowski', 'images/seasonOfStorms.jpg', 2448.5, 7000));
productList.push (new Product(11, 'Elantris', 'Brandon Sanderson', 'images/elantris.jpg', 1498.2, 7000));
productList.push (new Product(12, 'The Hobbit', 'J.R.R Tolkien', 'images/theHobbit.jpg', 1349, 7000));
productList.push (new Product(13, 'Foundation', 'Isaac Asimov', 'images/foundation.jpg', 1200.95, 7000));
productList.push (new Product(14, 'Dune', 'Frank Herbert', 'images/dune.jpg', 1834.07, 7000));
productList.push (new Product(15, 'Parable of the Sower', 'Octavia E. Butler', 'images/parableOfTheSower.jpg', 1427.62, 7000));
productList.push (new Product(16, 'Never Let Me Go', 'Kazuo Ishiguro', 'images/neverLetMeGo.jpg', 1577.44, 7000));
productList.push (new Product(17, 'The Vanishing Half', 'Brit Bennet', 'images/vanishingHalf.jpg', 1552.22, 7000));
productList.push (new Product(18, 'The Devil and the Dark Water', 'Stuart Turton', 'images/devilDarkWater.jpg', 1675, 7000));
productList.push (new Product(19, 'The Phone Box at the Edge...', 'Laura Imai Messina', 'images/phoneBox.jpg', 2983, 7000));
productList.push (new Product(20, 'Project Hail Mary', 'Andy Weir', 'images/hailMary.jpg', 2399, 7000));

const saveProductList = (key, value) => {
    localStorage.setItem(key, value);
}

for (const product of productList) {
    saveProductList(product.id, JSON.stringify(product));
}