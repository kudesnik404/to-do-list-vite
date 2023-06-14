import isScrollbarVisible from "@/scripts/helpers/isScrollbarVisible.js";

const todo = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const todoButton = document.querySelector(".todo__button");
    const todoList = document.querySelector(".todo__list");

    const todoListObserver = new MutationObserver(() => toggleTodoCardOverflowingClass(todoList));

    const toggleTodoCardOverflowingClass = () => {
      document.querySelector(".todo__card").classList.toggle("todo__card_overflown", isScrollbarVisible(todoList));
    };

    todoButton.addEventListener("click", () => {
      const todoCheckboxes = document.querySelectorAll(".todo__checkbox");
      const todoCheckboxNode = todoCheckboxes[todoCheckboxes.length - 1];
      const todoCheckboxNodeInput = todoCheckboxNode.querySelector(".checkbox__input");
      const todoCheckboxNumberNew = todoCheckboxes.length + 1;

      todoCheckboxNodeInput.setAttribute("id", todoCheckboxNumberNew);
      todoCheckboxNodeInput.setAttribute("name", todoCheckboxNumberNew);
      todoCheckboxNodeInput.setAttribute("value", todoCheckboxNumberNew);

      const todoCheckboxClone = todoCheckboxNode.cloneNode(true);

      todoList.appendChild(todoCheckboxClone);
    });

    toggleTodoCardOverflowingClass(todoList);

    todoListObserver.observe(todoList, { childList: true });
  });
};

export default todo;
