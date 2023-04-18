const Carrito = () => {
  return (
    <div class="container">
      <h1 class="mt-4 mb-3">
        Spring eCommerce <small>Carrito</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a th:href="@{/}">Home</a>
        </li>
        <li class="breadcrumb-item active">Carrito</li>
      </ol>

      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-9">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr th:each="dorden:${cart}">
                    <td th:text="${dorden.nombre}"></td>
                    <td th:text="${dorden.precio}"></td>
                    <td th:text="${dorden.cantidad}"></td>
                    <td th:text="${dorden.total}"></td>
                    <td>
                      <a
                        th:href="@{/delete/cart/{id}   (id=${dorden.producto.id}) }"
                        class="btn btn-danger"
                      >
                        Quitar
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-lg-3">
              <h2 class="card-title">SUBTOTAL</h2>

              <ul class="list-group">
                <li class="list-group-item">
                  <h5 th:text="${orden.total}"></h5>
                </li>
                <a th:href="@{/order}" class="btn btn-dark">
                  Ver Orden
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
