// tabs.js
export function initializeTabs() {
  const tabsContainers = Array.from(document.querySelectorAll(".tabs"));

  tabsContainers.forEach(tabsContainer => {
    const STATE = { currentTab: null };

    const targetsContainer = tabsContainer.querySelector(".targets");
    const triggers = Array.from(tabsContainer.querySelectorAll(".trigger"));
    const targets = [];

    function activateTab(ind) {
      if (ind == null) return ind;
      const trigger = triggers[ind];
      trigger.classList.add("active");
      const target = targets[ind];
      target.classList.add("active");
      targetsContainer.style.transform = `translateX(-${ind}00%)`;
      return ind;
    }

    function deactivateTab(ind) {
      if (ind == null) return ind;
      const trigger = triggers[ind];
      trigger.classList.remove("active");
      const target = targets[ind];
      target.classList.remove("active");
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
      STATE.currentTab = activateTab(0);
    }
  });
}
