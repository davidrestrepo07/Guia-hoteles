
$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 5000
    });
    $("#contactoBtn").on('shown.bs.modal', function (e) {
        console.log("el modal se está mostrando");
    });
    $("#contacto").on('show.bs.modal', function (e) {
        console.log('el modal contacto está mostrando');
        $('#contactoBtn').removeClass("btn-outline-success");
        $('#contactoBtn').addClass("btn-primary");
        $('#contactoBtn').prop('disabled', true);

    });
    $("#contacto").on('hidden.bs.modal', function (e) {
        $('#contactoBtn').prop('disabled', false);
    });
});
