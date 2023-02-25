$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('#contacto').on('shown.bs.modal', function(e) {
        $('.btn-info-modal').addClass('btn-info-modal-open')
        $('.btn-info-modal').prop('disabled', true)
    })
    $('#contacto').on('hidden.bs.modal', function(e) {
        $('.btn-info-modal').removeClass('btn-info-modal-open')
        $('.btn-info-modal').prop('disabled', false)
    })
    $('.carousel').carousel({interval: 2000})
})