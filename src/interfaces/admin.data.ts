export interface Category {
    id: number;
    name: string;
    nameUK: string;
    products: Product[] | null;
}

export interface Country {
    id: number;
    name: string;
    nameUK: string;
    products: Product[] | null;
}

export interface Manufacturer {
    id: number;
    name: string;
    nameUK: string;
    products: Product[] | null;
}

export interface Order {
    id: number;
    userId: number;
    userName: string;
    orderDate: Date;
    price: number;
    shippingAdress: string;
    OrderStatusId: number;
    user: User;
    orderStatus: OrderStatus;
    orderItems: OrderItem[] | null;
}

export interface OrderStatus {
    id: number;
    statusName: string;
    statusNameUK: string;
}

export interface OrderItem{
    id: number;
    orderId: number;
    productId: number;
    productName: string;
    productNameUK: string;
    productPrice: number;
    quantity: number;
    order: Order | null;
    product: Product | null;
}

export interface Product {
    id: number;
    name: string;
    nameUK: string;
    description: string;
    descriptionUK: string;
    imgPath: string;
    price: number;
    stockQuantity: number;
    discount: number;
    isActive: boolean;
    categoryId: number;
    countryId: number;
    manufacturerId: number;
    category: Category | null;
    country: Country | null;
    manufacturer: Manufacturer | null;
    productAttributes: ProductAttribute[] | null;
}

export interface ProductAttribute {
    attributeId: number;
    attributeName: string;
    attributeNameUK: string;
    attributeValue: string;
    attributeValueUK: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    patronomic: string;
    email: string;
    password: string;
    phoneNumber: string;
    birthdate: Date;
    creationDate: Date;
    isActive: boolean;
    roleId: number;
    role: Role;
    basket: Basket | null;
    orders: Order[] | null;
}

export interface Basket {
    id: number;
    userId: number;
    user: User | null;
    basketItems: BasketItem[] | null;
}

export interface BasketItem {
    id: number;
    basketId: number;
    productId: number;
    productName: string;
    productNameUK: string;
    productPrice: number;
    quantity: number;
    basket: Basket | null;
    product: Product | null;
}