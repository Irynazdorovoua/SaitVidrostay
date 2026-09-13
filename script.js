
document.addEventListener("DOMContentLoaded", () => {
  // Save shopping list state
  document.querySelectorAll(".shopping-list input[type='checkbox']").forEach((box, idx) => {
    const key = `vidrostay-shopping-${idx}`;
    box.checked = localStorage.getItem(key) === "1";
    box.addEventListener("change", () => {
      localStorage.setItem(key, box.checked ? "1" : "0");
    });
  });

  // Recipe modal
  const modal = document.querySelector(".recipe-modal");
  const modalDish = document.querySelector("[data-modal='dish']");
  const modalRecipe = document.querySelector("[data-modal='recipe']");
  const modalTitle = document.querySelector("[data-modal='title']");
  const modalType = document.querySelector("[data-modal='type']");
  const modalDesc = document.querySelector("[data-modal='desc']");

  document.querySelectorAll(".preview-card").forEach(card => {
    card.addEventListener("click", () => {
      modalDish.src = card.dataset.photo;
      modalRecipe.src = card.dataset.recipe;
      modalTitle.textContent = card.dataset.title;
      modalType.textContent = card.dataset.type;
      modalDesc.textContent = card.dataset.desc;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  });
});
