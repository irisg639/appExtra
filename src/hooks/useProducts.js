import { useState, useEffect } from 'react';
import { getAllProducts, searchProductsByName, searchProductsByCategory } from '../services/ProductService';

function useProducts() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        async function fetchFilteredProducts() {
            try {
                if (searchTerm) {
                    const data = await searchProductsByName(searchTerm);
                    setProducts(data);
                } else if (categoryFilter) {
                    const data = await searchProductsByCategory(categoryFilter);
                    setProducts(data);
                } else {
                    const data = await getAllProducts();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Error filtering products:', error);
            }
        }

        fetchFilteredProducts();
    }, [searchTerm, categoryFilter]);

    return { products, searchTerm, setSearchTerm, categoryFilter, setCategoryFilter };
}

export default useProducts;
