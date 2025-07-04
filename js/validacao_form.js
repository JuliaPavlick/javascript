var formEl = document.getElementById("meuform");

// adiciona o evento de submit ao formulário
captura_eventos(formEl, 'submit', formValid);

// função para capturar eventos de forma compatível com navegadores antigos
function captura_eventos(objeto, evento, funcao) {
  if (objeto.addEventListener) {
    objeto.addEventListener(evento, funcao, true);
  } else if (objeto.attachEvent) {
    objeto.attachEvent('on' + evento, funcao);
  }
}

// função para cancelar o envio do formulário
function cancelar_evento(evento) {
  if (evento.preventDefault) {
    evento.preventDefault();
  } else {
    window.event.returnValue = false;
  }
}

// função para verificar se algum radio ou checkbox foi marcado
function verificaCampos(campo, evento) {
  var checados = false;
  for (var i = 0; i < campo.length; i++) {
    if (campo[i].checked) {
      checados = true;
      break;
    }
  }

  if (!checados) {
    alert("Marque o campo: " + campo[0].name);
    cancelar_evento(evento);
    return false;
  }
}

// função principal que valida todos os campos do formulário
function formValid(evento) {
  var camponome = formEl.textName.value.trim();
  var campocidade = formEl.Cidades;
  var camporadios = formEl.sexo;
  var campocheckbox = formEl.Rede;

  if (camponome.length === 0) {
    alert("O campo nome é obrigatório.");
    cancelar_evento(evento);
    return false;
  }

  if (campocidade.value === "") {
    alert("Selecione uma cidade.");
    cancelar_evento(evento);
    return false;
  }

  if (verificaCampos(camporadios, evento) === false) return false;

  if (verificaCampos(campocheckbox, evento) === false) return false;
}
