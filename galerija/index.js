function openModal(title, actors, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalActors").innerText = actors;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target.id === "modal") closeModal();
};