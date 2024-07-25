
export const products = [
    {
        nombre: "Samsung Galaxy A24",
        precio: 8500,
        categoria: "celulares",
        stock: 5,
        descripcion:
            "El Samsung Galaxy A24 es un smartphone que ofrece una experiencia completa con sus destacadas características en términos de pantalla, batería y cámaras. Su pantalla Super AMOLED te brinda una calidad de imagen impresionante con colores vibrantes y un contraste nítido. Además, con una tasa de refresco de 90Hz, disfrutarás de una navegación suave y fluida en todo el dispositivo, desde desplazarte por las redes sociales hasta jugar juegos",
        img: "https://www.megatone.net/images//Articulos/zoom2x/209/MKT1761CEV-1.jpg",
    },
    {
        nombre: "Gabinete Kolink Inspire K3 M-ATX ",
        precio: 41900,
        categoria: "gabinetes",
        stock: 5,
        descripcion:
            "el Gabinete Kolink Inspire K3  es compacto con diseño moderno, panel frontal RGB y excelente gestión de cables. Ideal para construir PCs de alto rendimiento en espacios reducidos.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38034_Gabinete_Antec_NX200M_White_Vidrio_Templado_1776b5b2-grn.jpg",
    },
    {
        nombre: "Gabinete Aerocool Bionic G WT V2",
        precio: 61900,
        categoria: "gabinetes",
        stock: 7,
        descripcion:
            "el Aerocool Bionic G  es compacto con diseño moderno, panel frontal RGB y excelente gestión de cables. Ideal para construir PCs de alto rendimiento en espacios reducidos.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_27385_Gabinete_Aerocool_Bionic_G_WT_V2_White_ARGB_ATX_50a14f8f-grn.jpg",
    },
    {
        nombre: "Gabinete ASUS PRIME AP201",
        precio: 112190,
        categoria: "gabinetes",
        stock: 2,
        descripcion:
            "el Gabinete ASUS PRIME AP201 es compacto con diseño moderno, panel frontal RGB y excelente gestión de cables. Ideal para construir PCs de alto rendimiento en espacios reducidos.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37089_Gabinete_ASUS_PRIME_AP201_Mesh_440c4850-grn.jpg",
    },
    {
        nombre: "Notebook Gamer Dell",
        precio: 8900,
        categoria: "notebooks",
        stock: 5,
        descripcion:
            "Notebook Gamer Dell: Potente rendimiento con pantalla de 240Hz, procesador i9-13900, tarjeta gráfica RTX 4070, 32GB DDR5 y 1TB SSD. Ideal para gaming de alta velocidad y tareas intensivas.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39866_Notebook_Gamer_Dell_G16_7630_16__QHD__240Hz_i9-13900HX_RTX4070_32GB_DDR5_1TB_SSD_Win11_385fb303-grn.jpg",
    },
    {
        nombre: "Notebook Gamer Asus Vivobook",
        precio: 2250000,
        categoria: "notebooks",
        stock: 1,
        descripcion:
            "Notebook Gamer Asus Vivobook Pro 16 Core i9-13900H RTX4060: Potente rendimiento con pantalla de 240Hz,. Ideal para gaming de alta velocidad y tareas intensivas.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40103_Notebook_Gamer_Asus_Vivobook_Pro_16__Core_i9-13900H_RTX4060_16GB_512GB_SSD_Win11_3437b73b-grn.jpg",
    },
    {
        nombre: "Procesador Intel Core i5 14600K",
        precio: 9900,
        categoria: "procesadores",
        stock: 5,
        descripcion:
            "Procesador Intel Core i5-14600K: Rápido y eficiente, con 5.3GHz Turbo y Socket 1700. Basado en la arquitectura Raptor Lake, ofrece un rendimiento superior para gaming y multitarea.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38636_Procesador_Intel_Core_i5_14600K_5.3GHz_Turbo_Socket_1700_Raptor_Lake_07cb7412-grn.jpg",
    },
    {
        nombre: "Procesador AMD RYZEN 3 3200G",
        precio: 85900,
        categoria: "procesadores",
        stock: 12,
        descripcion:
            "Procesador Procesador AMD RYZEN 3 3200G Rápido y eficiente, con 4.0GHz Turbo. ofrece un rendimiento superior para gaming y multitarea.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38636_Procesador_Intel_Core_i5_14600K_5.3GHz_Turbo_Socket_1700_Raptor_Lake_07cb7412-grn.jpg",
    },
    {
        nombre: "Notebook Lenovo IdeaPad 3",
        precio: 610000,
        categoria: "notebooks",
        stock: 5,
        descripcion:
            "Notebook Lenovo IdeaPad 3 15ALC6: Pantalla FHD de 15.6, Ryzen 3 5300U, 8GB de RAM y 256GB SSD NVMe. Con FreeDOS y un elegante diseño en azul, ideal para productividad y entretenimiento diario.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39439_Notebook_Lenovo_IdeaPad_3_15ALC6_FHD_15.6__Ryzen_3_5300U_8GB_256GB_SSD_NVMe_Freedos_Blue_3863f106-grn.jpg",
    },
    {
        nombre: "Notebook Gamer Acer Nitro 5 15.6",
        precio: 1110000,
        categoria: "notebooks",
        stock: 2,
        descripcion:
            "Notebook Lenovo IdeaPad 3 15ALC6: Pantalla FHD de 15.6, Ryzen 3 5300U, 8GB de RAM y 256GB SSD NVMe. Con FreeDOS y un elegante diseño en azul, ideal para productividad y entretenimiento diario.",
        img: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38337_Notebook_Gamer_Acer_Nitro_5_15.6__FHD_Core_i5-11400H_RTX3050_8GB_512GB_SSD_NVMe_Win11_01944f4d-grn.jpg",
    },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = products.filter(
            (prod) => prod.categoria === category
        )
        setTimeout(() => {
            resolve(productosFiltrados)
        }, 2000);
    })
}
export const getProductsById = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = products.find(prod => prod.id === parseInt(id))
        setTimeout(() => {
            resolve(productoFiltrado)

        }, 2000);
    })
}