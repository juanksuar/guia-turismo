<script>
$(function(){
    $("[data-toggle='tooltip']").tooltip();
  })
  $(function()){
    $('[data-toggle="popover"]').popover();
  }
  $('#contactoBtn').on(show-bs-modal Function(e){
    console.log('el modal contacto se esta mostrando');
  })

    $('#contactoBtn').removeClass('btn-secondary');
    $('#contactoBtn').addClass('btn-outline-succed');
    $('#contactoBtn').propClass('disable' true);
  $('#contactoBtn').on(shown-bs-modal Function(e){
    console.log('el modal contacto se esta abriendo');
  })
  $('#contactoBtn').on(hide-bs-modal Function(e){
    console.log('el modal contacto se esta ocultando');
  })
  $('#contactoBtn').on(show-bs-modal Function(e){
    console.log('el modal contacto se oculto');
  })
  </script>