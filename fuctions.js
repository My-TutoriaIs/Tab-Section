// Get all tab buttons
const tabBtns = document.querySelectorAll('.tab-btn');

// Get all tabs
const tabs = document.querySelectorAll('.tab');

// Add click event listeners to all tab buttons
tabBtns.forEach(tabBtn => {
  tabBtn.addEventListener('click', e => {
    // Get the tab button that was clicked
    const currentTabBtn = e.target;

    // Get the data-tab attribute of the tab button
    const tabId = currentTabBtn.dataset.tab;

    // Get the tab corresponding to the data-tab attribute
    const currentTab = document.querySelector(tabId);

    // Remove the active class from all tab buttons
    tabBtns.forEach(tabBtn => tabBtn.classList.remove('active'));

    // Add the active class to the current tab button
    currentTabBtn.classList.add('active');

    // Remove the active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add the active class to the current tab
    currentTab.classList.add('active');
  });
});
