const products = [
    {
        id: '1',
        name: 'Cuadro Flores Blancas',
        price: 8500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_611200-MLA75359176584_032024-O.webp',
        stock: 5,
        description: 'Cuadro sobre lienzo',
        category: 'cuadros'
    },
    {
        id: '2',
        name: 'Cuadro Flor Beige',
        price: 9300,
        img: 'https://http2.mlstatic.com/D_NQ_NP_988308-MLU74078824976_012024-O.webp',
        stock: 12,
        description: 'Cuadro sobre lienzo',
        category: 'cuadros'
    },
    {
        id: '3',
        name: 'Set Cuadros Abstracto',
        price: 13500,
        img: 'https://media.cuadrostock.com/1544243-large_default/cuadro-decorativo-decora-con-buen-gusto-y-calidad.jpg',
        stock: 20,
        description: 'Cuadro sobre lienzo',
        category: 'cuadros'
    },
    {
        id: '4',
        name: 'Florero Nórdico',
        price: 15000,
        img: 'https://ae01.alicdn.com/kf/S683e80ed724d496f8e4319d5b8237d85A.jpg_960x960.jpg',
        stock: 8,
        description: 'Cuadro sobre lienzo 2',
        category: 'floreros'
    },
    {
        id: '5',
        name: 'Florero Mujer',
        price: 18000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_695013-MLA79613470094_102024-F.webp',
        stock: 11,
        description: 'Cuadro sobre lienzo 2',
        category: 'floreros'
    },
    {
        id: '6',
        name: 'Florero Bohemio',
        price: 10000,
        img: 'https://m.media-amazon.com/images/I/719kd011deL._AC_UF894,1000_QL80_.jpg',
        stock: 21,
        description: 'Cuadro sobre lienzo 2',
        category: 'floreros'
    },
    {
        id: '7',
        name: 'Vela Hot Chocolate',
        price: 6200,
        img: 'https://casaumo.com.ar/cdn/shop/files/vela-aromatica-cera-soja-cristal-classic-casa-umo.png?v=1706829140&width=533',
        stock: 19,
        description: 'Cuadro sobre lienzo 3',
        category: 'velas'
    },
    {
        id: '8',
        name: 'Vela Doble Mecha',
        price: 9000,
        img: 'https://velasdelafe.com/wp-content/uploads/2021/07/vela-aromatica-10x10-02.jpg',
        stock: 10,
        description: 'Cuadro sobre lienzo 3',
        category: 'velas'
    },
    {
        id: '9',
        name: 'Set Velas Jazmín',
        price: 2000,
        img: 'https://iluminasensegt.com/wp-content/uploads/2023/03/savingpng-2-4-600x800.jpeg',
        stock: 9,
        description: 'Cuadro sobre lienzo 3',
        category: 'velas'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}