const API_URL = `${import.meta.env.VITE_API_URL}/products`;


// =========================
// OBTENER TOKEN
// =========================

function getAdminToken() {
  return localStorage.getItem("adminToken");
}

// =========================
// MANEJAR RESPUESTA ADMIN
// =========================

async function handleAdminResponse(response, defaultMessage) {

  if (response.ok) {
    return await response.json();
  }


  // Token expirado o inválido
  if (response.status === 401) {

    localStorage.removeItem("adminToken");

    window.location.href = "/admin-login";

    throw new Error(
      "Tu sesión ha expirado. Inicia sesión nuevamente."
    );

  }


  const errorData =
    await response.json()
      .catch(() => ({}));


  throw new Error(
    errorData.message ||
    errorData.error ||
    defaultMessage
  );

}
// =========================
// OBTENER PRODUCTOS
// PÚBLICO
// =========================

export async function getProducts() {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  return await response.json();
}


// =========================
// CREAR PRODUCTO
// ADMIN
// =========================

export async function createProduct(formData) {

  const token = getAdminToken();

  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    }
  );


  return await handleAdminResponse(
    response,
    "Error al crear el producto"
  );

}

// =========================
// ACTUALIZAR PRODUCTO
// ADMIN
// =========================

export async function updateProduct(
  id,
  product,
  files = []
) {

  const formData = new FormData();


  formData.append(
    "name",
    product.name || ""
  );

  formData.append(
    "category",
    product.category || ""
  );

  formData.append(
    "gender",
    product.gender || ""
  );

  formData.append(
    "price",
    product.price ?? 0
  );

  formData.append(
    "stock",
    product.stock ?? 0
  );

  formData.append(
    "description",
    product.description || ""
  );


  formData.append(
    "tags",
    JSON.stringify(
      product.tags || []
    )
  );


  formData.append(
    "attributes",
    JSON.stringify(
      product.attributes || []
    )
  );


  formData.append(
    "featured",
    product.featured ?? false
  );

  formData.append(
    "parent_id",
    product.parent_id ?? ""
  );

  formData.append(
    "mainImage",
    product.mainImage || ""
  );

  if (product.mainImageNewIndex !== null) {
    formData.append(
      "mainImageNewIndex",
      product.mainImageNewIndex
    );
  }

  files.forEach((file) => {

    formData.append(
      "images",
      file
    );

  });


  const token = getAdminToken();


  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: formData,
    }
  );


  return await handleAdminResponse(
    response,
    "Error al actualizar el producto"
  );

}

// =========================
// OBTENER PRODUCTOS PADRE
// =========================

export async function getParentProducts() {

  const response = await fetch(
    API_URL
  );


  if (!response.ok) {

    throw new Error(
      "Error al obtener productos padre"
    );

  }


  const products =
    await response.json();


  return products.filter(
    product =>
      product.parent_id === null
  );

}
// =========================
// ELIMINAR PRODUCTO
// ADMIN
// =========================

export async function deleteProduct(id) {

  const token =
    getAdminToken();


  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",

      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );


  return await handleAdminResponse(
    response,
    "Error al eliminar el producto"
  );

}


// =========================
// ELIMINAR IMAGEN
// ADMIN
// =========================

export async function deleteProductImage(
  id,
  filename
) {

  const token =
    getAdminToken();


  const response = await fetch(
    `${API_URL}/${id}/image/${filename}`,
    {
      method: "DELETE",

      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );


  return await handleAdminResponse(
    response,
    "Error al eliminar la imagen"
  );

}
