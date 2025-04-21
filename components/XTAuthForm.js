export function createXTAuthForm() {
  const form = document.createElement('form');
  form.id = 'xt-auth-form';
  form.innerHTML = `
    <h3>ورود حساب XT</h3>
    <label>API Key: <input type="text" id="apiKey" required /></label><br />
    <label>API Secret: <input type="password" id="apiSecret" required /></label><br />
    <button type="submit">ذخیره حساب</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const apiKey = document.getElementById('apiKey').value;
    const apiSecret = document.getElementById('apiSecret').value;

    const accounts = JSON.parse(localStorage.getItem('xtAccounts') || '[]');
    accounts.push({ apiKey, apiSecret });
    localStorage.setItem('xtAccounts', JSON.stringify(accounts));

    alert('حساب با موفقیت ذخیره شد.');
    form.reset();
  });

  return form;
}
