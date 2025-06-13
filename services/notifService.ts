export const showToast = (
  message: string,
  type: 'success' | 'error' | 'info'
) => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
};
