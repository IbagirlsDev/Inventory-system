
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

document.getElementById('product-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const productName = document.getElementById('productName').value;
  const productCategory = document.getElementById('productCategory').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productPrice = document.getElementById('productPrice').value;

  try {
    // Agregar nuevo producto a la colección "products"
    const docRef = await addDoc(collection(db, "products"), {
      name: productName,
      category: productCategory,
      quantity: productQuantity,
      price: productPrice
    });
    console.log("Producto añadido con ID: ", docRef.id);

    // Limpiar el formulario
    document.getElementById('product-form').reset();
  } catch (error) {
    console.error("Error al añadir el producto: ", error);
  }
});


