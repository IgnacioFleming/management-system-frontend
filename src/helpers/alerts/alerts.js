import Swal from "sweetalert2";
import { customColors } from "../utils";
export default class Alerts {
  static async successAlert({ title = "Felicitaciones!", text = "El proceso finalizó con éxito.", confirmButtonText = "OK", resolveCallback, toast = false, position }) {
    const res = await Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonText,
      toast,
      position: position || null,
    });
    if (resolveCallback && res.isConfirmed) return resolveCallback();
  }

  static async errorAlert({ title = "Error!", text = "Ocurrió un error durante el proceso.", resolveCallback, toast = false, position }) {
    await Swal.fire({
      title,
      text,
      icon: "error",
      toast,
      position: position || null,
    });
    if (resolveCallback) return resolveCallback();
  }
  static async warnAlert({ title = "Advertencia!", text = "", hasCancellation, confirmCallback, rejectCallback, confirmButtonText, cancelButtonText }) {
    const res = await Swal.fire({
      title,
      text,
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: confirmButtonText || "OK",
      showCancelButton: hasCancellation || false,
      cancelButtonText: cancelButtonText || "Cancelar",
      confirmButtonColor: customColors.DANGER,
    });
    if (res.isConfirmed) return confirmCallback();
    return rejectCallback();
  }

  static async addItem({ title = "Agregar Item", text = "Estás seguro que querés agregar este item?", hasCancellation, confirmCallback, rejectCallback, confirmButtonText, cancelButtonText }) {
    const res = await Swal.fire({
      title,
      text,
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: confirmButtonText || "Agregar",
      showCancelButton: hasCancellation || false,
      cancelButtonText: cancelButtonText || "Cancelar",
      confirmButtonColor: customColors.WARN,
    });
    if (res.isConfirmed) return confirmCallback();
    return rejectCallback();
  }
}
