const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";   //para guardar el texto actualizado

noteEl.addEventListener("focus",()=>{  //cuando esta sobre el cuadro de texto interactuando escribiendo
  statusEl.textContent="";
})

noteEl.addEventListener("blur", () => {  //cuando ya no esta sobre el cuadro de texto
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {  // si no hay cambios en el texto
    return;
  }

  currentContent = newContent;
  console.log(currentContent);

  statusEl.textContent = "Note saved successfully!";    // avisa dentro de la pagina que la nota se guardo
});

window.addEventListener("DOMContentLoaded", () => {   // guarda el texto nuevo añadido en el cuadro de texto
  currentContent = noteEl.textContent;
});
