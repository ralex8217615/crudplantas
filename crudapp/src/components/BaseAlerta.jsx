function BaseAlerta({ visible, mensaje, onConfirmar, onCancelar }) {

  if (!visible) return null;

  return (
    <div className="alert alert-warning">

      <p>{mensaje}</p>

      <button
        className="btn btn-danger me-2"
        onClick={onConfirmar}
      >
        Sí, eliminar
      </button>

      <button
        className="btn btn-secondary"
        onClick={onCancelar}
      >
        Cancelar
      </button>

    </div>
  );
}

export default BaseAlerta;