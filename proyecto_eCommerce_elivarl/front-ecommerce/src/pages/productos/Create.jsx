const Create = () => {
  return (
    <div class="container">
      <h1 class="mt-4 mb-3">
        Spring eCommerce <small>Productos</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li class="breadcrumb-item active">Crear Productos</li>
      </ol>

      <h2>Crear Producto</h2>

      <form
        class="form-horizontal"
        th:action="@{/productos/save}"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="form-group">
          <label class="control-label col-sm-2" for="nombre">
            Nombre:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              placeholder="Ingrese el nombre del producto"
              autocomplete="off"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="descripcion">
            Descripción:
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="descripcion"
              name="descripcion"
              placeholder="Ingrese la descripcion del producto"
              required
              autocomplete="off"
            >
              {" "}
            </textarea>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="cantidad">
            Cantidad:
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="cantidad"
              name="cantidad"
              placeholder="Ingrese la cantidad del producto"
              required
              autocomplete="off"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="precio">
            Precio:
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              step="any"
              id="precio"
              name="precio"
              placeholder="Ingrese el precio del producto"
              autocomplete="off"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="img">
            Imagen:
          </label>
          <div class="col-sm-10">
            <input type="file" class="form-control-file" id="img" name="img" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2">
            <button type="submit" class="btn btn-success">
              <span class="glyphicon glyphicon-saved"></span> Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
