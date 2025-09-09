import k1_img from '../assets/men1.jpg'
import k2_img from '../assets/men2.png'
import k3_img from '../assets/men3.jpg'
import k4_img from '../assets/men4.jpg'
import k5_img from '../assets/men5.jpg'
import k6_img from '../assets/men6.jpg'
import k7_img from '../assets/men7.jpg'
import k8_img from '../assets/men8.png'
import k9_img from '../assets/men9.jpg'
import k10_img from '../assets/men10.jpg'
import k11_img from '../assets/men11.jpg'
import k12_img from '../assets/men12.jpg'


import q1_img from '../assets/women10.jpg'
import q2_img from '../assets/women2.jpg'
import q3_img from '../assets/women3.jpg'
import q4_img from '../assets/women4.webp'
import q5_img from '../assets/women5.webp'
import q6_img from '../assets/women6.webp'
import q7_img from '../assets/women7.webp'
import q8_img from '../assets/women8.jfif'
import q9_img from '../assets/women9.jpg'
import q10_img from '../assets/women11.jpg'
import q11_img from '../assets/women12.jpg'
import q12_img from '../assets/women13.jpg'


import r1_img from '../assets/kid1.jpg'
import r2_img from '../assets/kid2.jfif'
import r3_img from '../assets/kid3.jfif'
import r4_img from '../assets/kid4.webp'
import r5_img from '../assets/kid5.jfif'
import r6_img from '../assets/kid6.jfif'
import r7_img from '../assets/kid7.webp'
import r8_img from '../assets/kid8.jfif'
import r9_img from '../assets/kid9.jpg'
import r10_img from '../assets/kid10.jpg'
import r11_img from '../assets/kid11.jpg'
import r12_img from '../assets/kid12.jpg'


let all_product = [
    
    { id: 1, name: "Jeans", category: "men", image:k1_img, new_price: 60.0, old_price: 90.5 },
    { id: 2, name: "Jacket", category: "men", image: k2_img, new_price: 90.0, old_price: 140.0 },
    { id: 3, name: "T-Shirt", category: "men", image: k3_img, new_price: 45.0, old_price: 70.0 },
    { id: 4, name: "Hoodie", category: "men", image: k4_img, new_price: 95.0, old_price: 150.0 },
    { id: 5, name: "Casual Shirts", category: "men", image: k5_img, new_price: 70.0, old_price: 110.0 },
    { id: 6, name: "Sweater", category: "men", image: k6_img, new_price: 92.0, old_price: 145.0 },
    { id: 7, name: "Shorts", category: "men", image: k7_img, new_price: 40.0, old_price: 65.0 },
    { id: 8, name: "Kurta", category: "men", image: k8_img, new_price: 78.0, old_price: 115.0 },
    { id: 9, name: "Formal Shirts", category: "men", image:k9_img, new_price: 55.0, old_price: 90.5 },
    { id: 10, name: "Formal Pants", category: "men", image: k10_img, new_price: 65.0, old_price: 100.0 },
    { id: 11, name: "Track Pants", category: "men", image: k11_img, new_price: 45.0, old_price: 80.5 },
    { id: 12, name: "Dhotis", category: "men", image: k12_img, new_price: 75.0, old_price: 120.0 },

    { id: 13, name: "Kurti", category: "women", image: q1_img, new_price: 50.0, old_price: 80.5},
    { id: 14, name: "Saree", category: "women", image:q2_img, new_price: 75.0, old_price: 120.0 },
    { id: 15, name: "Dress", category: "women", image: q3_img, new_price: 85.0, old_price: 130.0 }, 
    { id: 16, name: "Leggings", category: "women", image: q4_img, new_price: 55.0, old_price: 100.0 },
    { id: 17, name: "Jumpsuit", category: "women", image: q5_img, new_price: 88.0, old_price: 135.0 },
    { id: 18, name: "Gown", category: "women", image: q6_img, new_price: 99.0, old_price: 160.0 },
    { id: 19, name: "Top", category: "women", image: q7_img, new_price: 52.0, old_price: 85.0 },
    { id: 20, name: "Skirt", category: "women", image:q8_img, new_price: 73.0, old_price: 110.0 },
    { id: 21, name: "Palazzos", category: "women", image: q9_img, new_price: 57.0, old_price: 95.0 },
    { id: 22, name: "Dupattas", category: "women", image: q10_img, new_price: 22.0, old_price: 38.0 },
    { id: 23, name: "Lehenga Cholis", category: "women", image: q11_img, new_price: 59.0, old_price: 91.0 },
    { id: 24, name: "Jeans", category: "women", image:q12_img, new_price: 43.0, old_price: 87.0 },

    { id: 25, name: "Denim Shirt", category: "kid", image: r1_img, new_price: 85.0, old_price: 140.0 },
    { id: 26, name: "Cargo Pants", category: "kid", image:r2_img , new_price: 88.0, old_price: 130.0 },
    { id: 27, name: "Trousers", category: "kid", image:r3_img , new_price: 76.0, old_price: 120.0 },
    { id: 28, name: "Tank Top", category: "kid", image: r4_img, new_price: 49.0, old_price: 80.0 },
    { id: 29, name: "Formal Pants", category: "kid", image:r5_img, new_price: 98.0, old_price: 160.0 },
    { id: 30, name: "Leather Jacket", category: "kid", image: r6_img, new_price: 150.0, old_price: 250.0 },
    { id: 31, name: "Gym Shorts", category: "kid", image: r7_img, new_price: 55.0, old_price: 90.0 }, 
    { id: 32, name: "Casual Blazer", category: "kid", image: r8_img, new_price: 105.0, old_price: 170.0 },
    { id: 33, name: "T-Shirts", category: "kid", image:r9_img, new_price: 33.0, old_price: 60.0 },
    { id: 34, name: "Dresses", category: "kid", image: r10_img, new_price: 40.0, old_price: 75.0 },
    { id: 35, name: "Shirts", category: "kid", image: r11_img, new_price: 35.0, old_price: 60.0 }, 
    { id: 36, name: "Kurtas", category: "kid", image: r12_img, new_price: 76.0, old_price: 125.0 },

    
]


export default all_product;