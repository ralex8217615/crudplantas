export default function BaseModal({
  visible,
  titulo,
  children,
  onClose,
  onGuardar
}) {
  if (!visible) return null;

  return (
    <div style={styles.fondo}>
      <div style={styles.modal}>
        <h3>{titulo}</h3>

        {children}

        <div style={{ marginTop: "10px" }}>
          <button onClick={onGuardar} style={styles.guardar}>
            Guardar
          </button>

          <button onClick={onClose} style={styles.cancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  fondo: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px"
  },
  guardar: {
    marginRight: "10px",
    background: "green",
    color: "white",
    border: "none",
    padding: "5px 10px"
  },
  cancelar: {
    background: "gray",
    color: "white",
    border: "none",
    padding: "5px 10px"
  }
};  