import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  state = {
    productos: [
      { id: 1, nombre: 'Laptop', precio: 999 },
      { id: 2, nombre: 'Mouse', precio: 25 },
      { id: 3, nombre: 'Teclado', precio: 45 }
    ],
    carrito: []
  };

  handleAgregar = (producto) => {
    this.setState(prevState => ({
      carrito: [...prevState.carrito, producto]
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Catálogo</h2>
        <div className="row">
          {this.state.productos.map(prod => (
            <ProductCard key={prod.id} producto={prod} onAgregar={this.handleAgregar} />
          ))}
        </div>
        <h3>Carrito ({this.state.carrito.length})</h3>
      </div>
    );
  }
}

export default ProductList;