//validação de formulário
$("#form-contato").submit((e) => {
  var name = $("#floatingName");
  var phone = $("#floatingPhone");
  var email = $("#floatingEmail");
  var message = $("#floatingTextarea");

  $(".is-invalid").removeClass("is-invalid");

  //valida nome
  if (name.val() == "") {
    name.addClass("is-invalid");
    return false;
  } else {
    name.addClass("is-valid");
  }

  //valida telefone
  if (phone.val() == "") {
    phone.addClass("is-invalid");
    return false;
  } else {
    phone.addClass("is-valid");
  }

  //valida email
  if (email.val() == "") {
    email.addClass("is-invalid");
    return false;
  } else {
    email.addClass("is-valid");
  }

  //valida mensagem
  if (message.val() == "") {
    message.addClass("is-invalid");
    return false;
  } else {
    message.addClass("is-valid");
  }

  $("#btn-submit")
    .attr("data-bs-toggle", "modal")
    .attr("data-bs-target", "#modalLogin");

  return false;
});
