var etalase = [
    {id: 1, barang: 'T-shirt', harga: 80000},
    {id: 2, barang: 'Jeans', harga: 90000},
    {id: 3, barang: 'Tote Bag', harga: 20000},
    {id: 4, barang: 'School Bag', harga: 25000},
    {id: 5, barang: 'Shoes', harga: 120000}
];

function cariPalingMurah (dataEtalase) {
    return dataEtalase.reduce((palingMurah, item) => {
        return item.harga < palingMurah.harga ? item : palingMurah;

    }, dataEtalase[0]);
}

function cariPalingMure (dataEtalase) {
    const terurut = [...dataEtalase].sort((a,b) => a.harga - b.harga);
    return terurut[0];

}

console.log("Barang paling murah", cariPalingMurah(etalase));
console.log("Barang murah nih", cariPalingMure(etalase));