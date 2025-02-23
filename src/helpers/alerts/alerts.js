import Swal from "sweetalert2";
export default class Alerts {
  static async successAlert({ title = "Felicitaciones!", text = "El proceso finalizó con éxito.", confirmButtonText = "OK", resolveCallback }) {
    const res = await Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonText,
    });
    if (resolveCallback && res.isConfirmed) return resolveCallback();
  }

  static async errorAlert({ title = "Error!", text = "Ocurrió un error durante el proceso.", resolveCallback }) {
    await Swal.fire({
      title,
      text,
      icon: "error",
    });
    if (resolveCallback) return resolveCallback();
  }
  static async warnAlert({ title = "Advertencia!", text = "", hasCancellation, confirmCallback, rejectCallback, confirmButtonText, cancelButtonText }) {
    const res = await Swal.fire({
      title,
      text,
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: confirmButtonText || "OK",
      showCancelButton: hasCancellation || false,
      cancelButtonText: cancelButtonText || "Cancelar",
    });
    if (res.isConfirmed) return confirmCallback();
    return rejectCallback();
  }
}
