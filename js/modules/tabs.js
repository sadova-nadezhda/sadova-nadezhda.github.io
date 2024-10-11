export function initializeTabs() {
  const tabsContainers = Array.from(document.querySelectorAll(".tabs"));

  tabsContainers.forEach(tabsContainer => {
    const STATE = { currentTab: null };
  
    const targetsContainer = tabsContainer.querySelector(".targets");
    const triggers = Array.from(tabsContainer.querySelectorAll(".trigger"));
    const select = tabsContainer.querySelector(".mobile-select");
    const targets = [];
  
    function activateTab(ind) {
      if (ind == null) return ind;
      const trigger = triggers[ind];
      if (trigger) trigger.classList.add("active");
      const target = targets[ind];
      if (target) target.classList.add("active");
      // targetsContainer.style.transform = `translateX(-${ind}00%)`;
      return ind;
    }
  
    function deactivateTab(ind) {
      if (ind == null) return ind;
      const trigger = triggers[ind];
      if (trigger) trigger.classList.remove("active");
      const target = targets[ind];
      if (target) target.classList.remove("active");
      return null;
    }
  
    if (targetsContainer) {
      triggers.forEach((trigger, ind) => {
        targets.push(tabsContainer.querySelector(trigger.dataset.target));
        trigger.addEventListener("click", () => {
          STATE.currentTab = deactivateTab(STATE.currentTab);
          STATE.currentTab = activateTab(ind);
        });
      });
  
      // Активируем вкладку на основе текущего URL хеша
      const currentHash = window.location.hash;
      const initialIndex = currentHash ? triggers.findIndex(trigger => trigger.getAttribute('href') === currentHash) : 0;
      STATE.currentTab = activateTab(initialIndex !== -1 ? initialIndex : 0);
  
      // Добавляем обработчик для мобильного селекта
      if (select) {
        select.addEventListener("change", (event) => {
          const selectedOption = select.options[select.selectedIndex];
          const targetId = selectedOption.dataset.target;
          const ind = targets.findIndex(target => target.id === targetId.slice(1));
          if (ind !== -1) {
            STATE.currentTab = deactivateTab(STATE.currentTab);
            STATE.currentTab = activateTab(ind);
          }
        });
      }
    }
  });
  
}