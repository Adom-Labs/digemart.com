type HeaderArrangeMent =
    'stacked_no_image' |
    'text_left_image_right' |
    'stacked_image' |
    'stacked_bg'



type ShopApiDataType = {
    storeName: string;
    storeDesc: string;
    logo: string
    mobileNavType: 'dropdown' | 'bottombar' | 'loading',
    featured_categories: {
        name: string;
        image: string;
        description: string;
    }[],

    products: {
        id: string;
        product_name: string;
        price: number | string;
        currency: string;
        image: string;
        short_description: string;
        rating: {
            rating: number;
            count: number;
        };
    }[];
    header: {
        backgroundColor: string;
        lineOne: string,
        lineTwo: string,
        smallText: string
        textColor: string
        arrangement: HeaderArrangeMent
        image: string
    };
    primaryColor: string;
    secondaryColor: string;
    fonts: {
        heading: string
        body: string
    };
}


export default ShopApiDataType

