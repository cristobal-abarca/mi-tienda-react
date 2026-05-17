import React, { Component } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

class ContactForm extends Component {
  state = { nombre: '', email: '', mensaje: '', success: false };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactos'), {
        ...this.state,
        fecha: new Date().toISOString()
      });
      this.setState({ success: true });
      setTimeout(() => this.setState({ success: false }), 3000);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Contáctanos</h2>
        {this.state.success && <div className="alert alert-success">✅ Enviado</div>}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3"><input className="form-control" name="nombre" placeholder="Nombre" onChange={this.handleChange} /></div>
          <div className="mb-3"><input className="form-control" name="email" placeholder="Email" onChange={this.handleChange} /></div>
          <div className="mb-3"><textarea className="form-control" name="mensaje" placeholder="Mensaje" onChange={this.handleChange} /></div>
          <button className="btn btn-success" type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;