var initialState = [
    {
        id: 1,
        name: 'Iphone 12',
        image: 'https://cf.shopee.vn/file/d68c250de71755c946640c5402f4bcd7',
        description: 'Sản phẩm tốt',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 10',
        image: 'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-5.png',
        description: 'Sản phẩm tốt',
        price: 300,
        inventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone 7',
        image: 'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini.png',
        description: 'Sản phẩm tốt',
        price: 100,
        inventory: 4,
        rating: 3
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products