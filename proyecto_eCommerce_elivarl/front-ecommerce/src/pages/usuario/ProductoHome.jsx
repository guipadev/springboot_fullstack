const ProductoHome = () => {
  return (
    <div class="container">
      <h1 class="mt-4 mb-3">
        Spring eCommerce <small>Producto</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a th:href="@{/}">Home</a>
        </li>
        <li class="breadcrumb-item active">Producto</li>
      </ol>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <a href="#">
                {" "}
                <img
                  class="img-fluid rounded"
                  th:src="@{/images/{img} (img=${producto.imagen})  }"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-6">
              <form th:action="@{/cart}" method="POST">
                <input type="hidden" th:value="${producto.id}" name="id" />
                <h2 class="card-title" th:text="${producto.nombre}"></h2>

                <ul class="list-group">
                  <li class="list-group-item">
                    <h5 th:text=" 'Precio: '+ ${producto.precio} "></h5>
                  </li>
                  <li class="list-group-item">
                    <p th:text=" 'Descripción: '+ ${producto.descripcion} "></p>
                  </li>
                  <li class="list-group-item">
                    <h6>
                      Cantidad:{" "}
                      <input
                        type="number"
                        id="cantidad"
                        name="cantidad"
                        autocomplete="off"
                        min="1"
                        max="5"
                        value="1"
                      />
                    </h6>
                  </li>
                </ul>

                <button type="submit" class="btn btn-dark">
                  Añadir al carrito
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoHome;
