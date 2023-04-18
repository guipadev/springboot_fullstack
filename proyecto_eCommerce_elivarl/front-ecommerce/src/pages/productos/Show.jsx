const Show = () => {
  return (
    <div class="container">
      <h1 class="mt-4 mb-3">
        Spring eCommerce <small>Productos</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li class="breadcrumb-item active">Ver Productos</li>
      </ol>

      <a class="btn btn-primary" th:href="@{/productos/create}">
        {" "}
        Crear Producto
      </a>
      <h2>Productos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Inventario</th>
            <th scope="col">Precio</th>
            <th scope="col">Acción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr th:each="producto:${productos}">
            <td th:text="${producto.nombre}"></td>
            <td th:text="${producto.descripcion}"></td>
            <td th:text="${producto.cantidad}"></td>
            <td th:text="${producto.precio}"></td>
            <td>
              <a
                class="btn btn-warning"
                th:href="@{productos/edit/{id} (id=${producto.id}) }"
              >
                Editar
              </a>{" "}
            </td>
            <td>
              <a
                class="btn btn-danger"
                th:href="@{productos/delete/{id} (id=${producto.id}) }"
              >
                Eliminar
              </a>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Show;
