import Swal from "sweetalert2";
import { API_Status_List, customColors } from "../utils";
export default class Alerts {
  static async successAlert({ title = "Congratulations!", text = "Process finished succesfully.", confirmButtonText = "OK", resolveCallback, toast = false, position } = {}) {
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

  static async errorAlert({ title = "Error!", text = "An error has ocurred during the process.", resolveCallback, toast = false, position } = {}) {
    await Swal.fire({
      title,
      text,
      icon: "error",
      toast,
      position: position || null,
    });
    if (resolveCallback) return resolveCallback();
  }
  static async warnAlert({ title = "Warning!", text = "", hasCancellation, confirmCallback, confirmButtonText, cancelButtonText } = {}) {
    try {
      const res = await Swal.fire({
        title,
        text,
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: confirmButtonText || "OK",
        showCancelButton: hasCancellation || false,
        cancelButtonText: cancelButtonText || "Cancel",
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

  static async addItem({ title = "Add Item", text = "Are you sure you want to add this item?", hasCancellation, confirmCallback, confirmButtonText, cancelButtonText } = {}) {
    const res = await Swal.fire({
      title,
      text,
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: confirmButtonText || "Add",
      showCancelButton: hasCancellation || false,
      cancelButtonText: cancelButtonText || "Cancel",
      confirmButtonColor: customColors.WARN,
    });
    if (res.isConfirmed) return confirmCallback();
  }
  static async successToast({ title = "Process Success!", text = "Changes applied correctly" } = {}) {
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
  static async errorToast({ title = "Process Failure", text = "There was en error while applying changes" } = {}) {
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
