import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { producto, onAgregar } = this.props;
    return (
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Precio: ${producto.precio}</p>
            <button className="btn btn-primary" onClick={() => onAgregar(producto)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;