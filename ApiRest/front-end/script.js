document.addEventListener("DOMContentLoaded", function () {
  $("#guardarMotocicleta").on("click", function () {
    let datos = {
      marca: $("#marca").val(),
      modelo: $("#modelo").val(),
      color: $("#color").val(),
      placa: $("#placa").val(),
    };
    if ($("#id-motocicleta").val() === "") {
      console.log(datos);
      crearMotocicleta(datos);
    } else {
      datos.id = $("#id-motocicleta").val();
      editarMotocicleta(datos);
    }
  });

  $("#agregarMotocicleta").on("click", function () {
    $("#id-motocicleta").val("");
  });
  $(".btn-warning").on("click", function () {
    let idMotocicleta = $(this).data("id");
    $("#id-motocicleta").val(idMotocicleta);
  });

  $(".btnEliminarMotocicleta").on("click", function () {
    let idMotocicleta = $(this).data("id");
    $("#id-motocicleta").val(idMotocicleta);
  });

  $("#btnEliminarMotocicleta").click(function () {
    let id = $("#id-motocicleta").val();
    eliminar(id);
  });
});
//al abrir el modalverifica si hay un id valido si lo hay lo rellena para un actualizar
$("#motocicleta").on("shown.bs.modal", function () {


  if ($("#id-motocicleta").val() !== "") {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/ApiRest/get_id_motocicleta.php", //ojo en este caso
      dataType: "JSON",
      data: { id: $("#id-motocicleta").val() },
      success: function (respuesta) {

        $("#marca").val(respuesta.marca);
        $("#modelo").val(respuesta.modelo);
        $("#color").val(respuesta.color);
        $("#placa").val(respuesta.placa);
      },
      error: function (error) {
        // Manejar errores
        console.error("Error en la solicitud AJAX:", error);
        Swal.fire({
          title: "Error",
          text: "error:" + error,
          icon: "error",
        });
      },
    });
  }else{
    $("#marca").val("");
        $("#modelo").val("");
        $("#color").val("");
        $("#placa").val("");
  }
  
});

function crearMotocicleta(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/ApiRest/create_motocicleta.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#motocicleta").modal("hide");

      $("#marca").val(""),
        $("#modelo").val(""),
        $("#color").val(""),
        $("#placa").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function editarMotocicleta(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "PUT",
    url: "http://localhost:8080/ApiRest/update_motocicleta.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#motocicleta").modal("hide");

      $("#marca").val(""),
        $("#modelo").val(""),
        $("#color").val(""),
        $("#placa").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function eliminar(id) {
  console.log(id);
  $.ajax({
    type: "DELETE",
    url: "http://localhost/ApiRest/delete_motocicleta.php?id=" + id,
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta);
      $('modalEliminar').modal('hide')
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}
