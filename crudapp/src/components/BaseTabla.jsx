export default function BaseTabla({ columnas, datos, onEditar, onEliminar }) {
  console.log("tabla datos", datos);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columnas.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {datos.length === 0 ? (
          <tr>
            <td colSpan="5">No hay datos</td>
          </tr>
        ) : (
          datos.map((item) => (
            <tr key={item.id}>
              {columnas.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
              ))}

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEditar(item)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onEliminar(item)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}