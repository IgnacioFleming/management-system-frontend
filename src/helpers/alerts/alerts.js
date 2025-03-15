import Swal from "sweetalert2";
import { API_Status_List, customColors } from "../utils";
export default class Alerts {
  static async successAlert({ title = "Felicitaciones!", text = "El proceso finalizó con éxito.", confirmButtonText = "OK", resolveCallback, toast = false, position } = {}) {
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

  static async errorAlert({ title = "Error!", text = "Ocurrió un error durante el proceso.", resolveCallback, toast = false, position } = {}) {
    await Swal.fire({
      title,
      text,
      icon: "error",
      toast,
      position: position || null,
    });
    if (resolveCallback) return resolveCallback();
  }
  static async warnAlert({ title = "Advertencia!", text = "", hasCancellation, confirmCallback, confirmButtonText, cancelButtonText } = {}) {
    try {
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
      if (res.isConfirmed) {
        const res = await confirmCallback();
        if (res?.status === API_Status_List.ERROR) return await this.errorToast();
        return await this.successToast();
      }
    } catch (error) {
      return this.errorToast({ text: error });
    }
  }

  static async addItem({ title = "Agregar Item", text = "Estás seguro que querés agregar este item?", hasCancellation, confirmCallback, confirmButtonText, cancelButtonText } = {}) {
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
  }
  static async successToast({ title = "Proceso exitoso!", text = "Se ejecutaron correctamente los cambios" } = {}) {
    await Swal.fire({
      title,
      text,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  static async errorToast({ title = "Proceso fallido", text = "Hubo un error al procesar los cambios" } = {}) {
    await Swal.fire({
      title,
      text,
      icon: "error",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
