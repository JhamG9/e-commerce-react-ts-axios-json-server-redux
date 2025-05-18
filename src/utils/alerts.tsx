import Swal, { SweetAlertIcon } from "sweetalert2";

export const alertShow = (
  title: string,
  icon: SweetAlertIcon = "success",
  text: string = ""
) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const alertQuestion = async(
  title: string,
  confirmButtonText:string,
  cancelButtonText: string,
  icon: SweetAlertIcon = "question",
  text: string = "",


) => {
  return await Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText
  }).then((result) => result.isConfirmed);
};
