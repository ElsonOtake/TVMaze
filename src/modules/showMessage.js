const showMessage = (container, message) => {
  const status = document.createElement('div');
  status.className = 'app-message';
  status.setAttribute('role', 'status');
  status.textContent = message;
  container.replaceChildren(status);
};

export default showMessage;
