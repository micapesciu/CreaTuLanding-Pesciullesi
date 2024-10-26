const products = [
    {
        id: '1',
        name: 'Cuadro Flores Blancas',
        price: 8500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_611200-MLA75359176584_032024-O.webp',
        stock: 5,
        description: 'Un hermoso cuadro que captura la delicadeza de las flores blancas, ideal para decorar cualquier espacio.',
        category: 'cuadros'
    },
    {
        id: '2',
        name: 'Cuadro Flor Beige',
        price: 9300,
        img: 'https://http2.mlstatic.com/D_NQ_NP_988308-MLU74078824976_012024-O.webp',
        stock: 12,
        description: 'Este cuadro presenta un diseño elegante en tonos beige, perfecto para ambientes cálidos y acogedores.',
        category: 'cuadros'
    },
    {
        id: '3',
        name: 'Set Cuadros Abstracto',
        price: 13500,
        img: 'https://media.cuadrostock.com/1544243-large_default/cuadro-decorativo-decora-con-buen-gusto-y-calidad.jpg',
        stock: 20,
        description: 'Un set moderno de cuadros abstractos que agrega un toque contemporáneo y artístico a tu hogar.',
        category: 'cuadros'
    },
    {
        id: '4',
        name: 'Florero Nórdico',
        price: 15000,
        img: 'https://ae01.alicdn.com/kf/S683e80ed724d496f8e4319d5b8237d85A.jpg_960x960.jpg',
        stock: 8,
        description: 'Este florero de estilo nórdico combina minimalismo y funcionalidad, ideal para cualquier tipo de flor.',
        category: 'floreros'
    },
    {
        id: '5',
        name: 'Florero Mujer',
        price: 18000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_695013-MLA79613470094_102024-F.webp',
        stock: 11,
        description: 'Un elegante florero con diseño femenino, perfecto para dar un toque artístico y delicado a tus flores.',
        category: 'floreros'
    },
    {
        id: '6',
        name: 'Florero Bohemio',
        price: 10000,
        img: 'https://m.media-amazon.com/images/I/719kd011deL._AC_UF894,1000_QL80_.jpg',
        stock: 21,
        description: 'Un florero bohemio que aporta un estilo libre y desenfadado a tus decoraciones, ideal para interiores creativos.',
        category: 'floreros'
    },
    {
        id: '7',
        name: 'Vela Hot Chocolate',
        price: 6200,
        img: 'https://casaumo.com.ar/cdn/shop/files/vela-aromatica-cera-soja-cristal-classic-casa-umo.png?v=1706829140&width=533',
        stock: 19,
        description: 'Esta vela aromática de chocolate caliente crea un ambiente acogedor y dulce, ideal para momentos de relajación.',
        category: 'velas'
    },
    {
        id: '8',
        name: 'Vela Doble Mecha',
        price: 9000,
        img: 'https://velasdelafe.com/wp-content/uploads/2021/07/vela-aromatica-10x10-02.jpg',
        stock: 10,
        description: 'Una vela de doble mecha que proporciona una iluminación suave y un aroma envolvente, perfecta para cenas románticas.',
        category: 'velas'
    },
    {
        id: '9',
        name: 'Set Velas Jazmín',
        price: 2000,
        img: 'https://iluminasensegt.com/wp-content/uploads/2023/03/savingpng-2-4-600x800.jpeg',
        stock: 9,
        description: 'Un encantador set de velas de jazmín que llenan tu espacio de un aroma floral y fresco, ideal para cualquier ocasión.',
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