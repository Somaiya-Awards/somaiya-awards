import Swal, { type SweetAlertOptions } from "sweetalert2";

export default function swalAlert(options: SweetAlertOptions) {
    return Swal.fire(options)
}

export function unauthorizedSwal() {
    return Swal.fire({
        title: "Failed to Login",
        text: "We failed to recognize you! Try relogging",
        imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
        imageHeight: '250',
        confirmButtonColor: "rgb(185,28,28)"
    })
}