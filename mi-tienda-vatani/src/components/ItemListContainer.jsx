// ItemListContainer.jsx
import React, { useState } from 'react';

const ItemListContainer = ({ 
    greeting, 
    mainTitle,
    brandTitles = {
        apple: "Productos Apple",
        samsung: "Productos Samsung",
        google: "Productos Google"
    },
    buttonLabels = {
        viewDetail: "Ver detalle",
        filterAll: "Todos los productos"
    }
}) => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const categories = {
        apple: [
            { id: 1, name: 'iPhone 15 Pro Max', price: 1299, brand: 'Apple', image: '/api/placeholder/200/200' },
            { id: 2, name: 'iPhone 15 Pro', price: 999, brand: 'Apple', image: '/api/placeholder/200/200' },
            { id: 3, name: 'iPhone 15', price: 799, brand: 'Apple', image: '/api/placeholder/200/200' },
            { id: 4, name: 'iPhone 14', price: 699, brand: 'Apple', image: '/api/placeholder/200/200' }
        ],
        samsung: [
            { id: 5, name: 'Galaxy S24 Ultra', price: 1199, brand: 'Samsung', image: '/api/placeholder/200/200' },
            { id: 6, name: 'Galaxy S24+', price: 999, brand: 'Samsung', image: '/api/placeholder/200/200' },
            { id: 7, name: 'Galaxy S24', price: 799, brand: 'Samsung', image: '/api/placeholder/200/200' },
            { id: 8, name: 'Galaxy A54', price: 449, brand: 'Samsung', image: '/api/placeholder/200/200' }
        ],
        google: [
            { id: 9, name: 'Pixel 8 Pro', price: 999, brand: 'Google', image: '/api/placeholder/200/200' },
            { id: 10, name: 'Pixel 8', price: 699, brand: 'Google', image: '/api/placeholder/200/200' },
            { id: 11, name: 'Pixel 7a', price: 499, brand: 'Google', image: '/api/placeholder/200/200' },
            { id: 12, name: 'Pixel 7', price: 599, brand: 'Google', image: '/api/placeholder/200/200' }
        ]
    };

    const handleBrandFilter = (brand) => {
        setSelectedBrand(brand === selectedBrand ? null : brand);
    };

    const categoriesToShow = selectedBrand 
        ? { [selectedBrand]: categories[selectedBrand] }
        : categories;

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">{greeting}</h1>
            <h2 className="text-center mb-4">{mainTitle}</h2>
            
            {/* Botones de filtrado */}
            <div className="d-flex justify-content-center gap-3 mb-5">
                {Object.keys(categories).map(brand => (
                    <button
                        key={brand}
                        className={`btn ${selectedBrand === brand ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleBrandFilter(brand)}
                    >
                        {brandTitles[brand]}
                    </button>
                ))}
            </div>

            {/* Lista de productos */}
            {Object.entries(categoriesToShow).map(([brand, products]) => (
                <div key={brand} className="mb-5">
                    <h2 className="text-capitalize mb-4">{brandTitles[brand]}</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {products.map(product => (
                            <div key={product.id} className="col">
                                <div className="card h-100">
                                    <img 
                                        src={product.image} 
                                        className="card-img-top" 
                                        alt={product.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <button className="btn btn-primary">
                                            {buttonLabels.viewDetail}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemListContainer;