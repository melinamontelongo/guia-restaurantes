$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#contacto').on('show.bs.modal', function (e) {
        console.log("El modal se está mostrando");
    })

    $('#contacto').on('shown.bs.modal', function (e) {
        console.log("El modal se mostró");

        $('.btn-info-modal').addClass('btn-info-modal-open');
        $('.btn-info-modal').prop('disabled', true);
    })
    $('#contacto').on('hide.bs.modal', function (e) {
        console.log("El modal se está ocultando")
    })
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log("El modal se ocultó")

        $('.btn-info-modal').removeClass('btn-info-modal-open')
        $('.btn-info-modal').prop('disabled', false)
    })
    $('.carousel').carousel({ interval: 2000 })
})