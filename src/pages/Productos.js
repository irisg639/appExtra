import React from 'react';
import useProducts from '../hooks/useProducts';
import { useAuth } from '../context/AuthContext';

function Productos() {
    const { logout, user } = useAuth();
    const { products, searchTerm, setSearchTerm, categoryFilter, setCategoryFilter } = useProducts();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="productos-container">
            <h2>Bienvenido, {user?.username}!</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>

            <div className="search-filters">
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filtrar por categoría"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                />
            </div>

            <div className="productos-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Categoría: {product.category}</p>
                        <p>Precio: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;
