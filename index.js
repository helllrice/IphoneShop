function render(catalog) {
    const productsStore = localStorageUtil.getProducts(catalog);

    headerPage.render(productsStore.length);
    productsPage.render(catalog);
}

let CATALOG = [];


fetch('https://gist.githubusercontent.com/helllrice/f3ed1fe5ff5eb0238a7b2a6e997525df/raw/02c26e35dc4a0d18b40c7e4be86e3792524698a4/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render(body);
    })
    .catch(error => {
        console.log(error);
    });
