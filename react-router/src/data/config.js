/*
* NAVBAR
*/

export const websiteName = "BoolStore";
/* 
* HERO 
*/

export const heroLabel = "Archive 01 // Edition 2026";
export const heroTitle = "curated";
export const heroTitle2 = "essentials.";
export const heroShopBtn = "Shop New Arrivals";
export const heroSecondaryBtn = "View Manifesto";
export const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCVQ51vTHYd6hihxCjKUIDwIAs4Uazo4TRvPJ0HGCIKK3uccUGd_klPQqIpqR8xFUDHYCLg3WUnHTBvYaR-wLLtozgmgOt5VCYryHze1BiZDjBwsecIfItx0-jUe78PsN_A3yVHPGz5IYHrWG0upywlCWXtZN7hRbX8eTDxiaq5x8Q9bJbyiU_zxZdrYWnXIKcdHnM2p3XT6IWfiKkINvYwlIQE8F1rrJVLdb3PSPf4Uwb0jDwpP9pRF81MzsdY1Sx9p98ZJHDCyA";
export const heroImgAlt = "Minimalist fashion shot";
export const heroGeoLabel = "Lat 59.3293° N, Lon 18.0686° E";

export const heroConfigObj = { label: heroLabel, title: heroTitle, title2: heroTitle2, shopBtn: heroShopBtn, secondaryBtn: heroSecondaryBtn, image: heroImg, alt: heroImgAlt, geo: heroGeoLabel }

/*
* BRAND IDENTITY
*/

export const brandHeading = "Functional design for the modern architect. We bridge the gap between digital precision and tactile luxury.";

export const brandSpeciality = [
    { id: "spec1", spec: "Philosophy", value: "Northern European Logic" },
    { id: "spec2", spec: "Sourcing", value: "100% Traceable" },
    { id: "spec3", spec: "Output", value: "Limited Archives" },
]

export const brandIdentityObj = { heading: brandHeading, speciality: brandSpeciality }

/*
* HOME SINGLE FEAUTURED PRODUCT
*/

export const featuredImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDvhIja2G_Vv9OIgAjPqsSCmp_BhxbGBI74o0B1XdfEFs3NWg4xkDdcU7i-dvvvN1uLu2PmSvKLureCgam2v6X3JNbZGzfTzKWQTsvz5ltpHqTuw2C-E8UxHOm_b6IAgE5JxUIeUXHKQqrfvTkeLX2cDx19sCX6yWNetb8Z7PpcUV5cz_TyiadVIpbLWP9jZkV1VGIiEyD9paoiPNN9zdFFlr89OZUhtc8Kvb63kQs_zlOK_xJGRwNfLrg0DNwESG4-u7xKCPEU3w";
export const featuredAlt = "Featured Product";
export const shippingStatus = "Priority Shipment";
export const featuredTags = ["Core Collection", "Technical Spec"];
export const featuredName = "The Kinetic Runner";
export const featuredDescription = "Our signature footwear designed for urban efficiency. Built with recycled polymers and anatomical support frames. Architecture for the feet.";
export const featuredSpecifications = [
    { id: "spec1", label: "SKU:", value: "AT-2026-KINETIC-01" },
    { id: "spec2", label: "Upper Material:", value: "Recycled Nylon Mesh / TPU Overlay" },
    { id: "spec3", label: "Weight:", value: "240g (Size 42)" },
    { id: "spec4", label: "Heel-To-Toe Drop:", value: "8.0 mm" },
];
export const featuredPrice = "$245.00";


export const featuredObj = { image: featuredImage, alt: featuredAlt, shipping: shippingStatus, tags: featuredTags, name: featuredName, description: featuredDescription, spec: featuredSpecifications, price: featuredPrice }

/*
* PRODUCTS
*/
export const ITEMS_PER_PAGE = 8