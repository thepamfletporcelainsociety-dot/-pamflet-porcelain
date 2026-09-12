// Submission form handling.
// If a real form endpoint (e.g. Formspree, GoHighLevel webhook) is set on the
// form's action attribute, this submits via fetch and shows a status message.
// If the action still points at the placeholder, it falls back to opening a
// pre-filled email instead, so the form is never a dead end.

(function () {
  const form = document.getElementById('submission-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const isPlaceholder = form.action.includes('REPLACE_WITH_YOUR_FORM_ID');

  form.addEventListener('submit', function (event) {
    if (isPlaceholder) {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('Book submission: ' + (data.get('title') || ''));
      const body = encodeURIComponent(
        'Name: ' + data.get('name') + '\n' +
        'Email: ' + data.get('email') + '\n' +
        'Stage: ' + data.get('stage') + '\n\n' +
        data.get('message')
      );
      window.location.href = 'mailto:thepamfletporcelainsociety@gmail.com?subject=' + subject + '&body=' + body;
      status.textContent = 'Opening an email to send your submission — add a form endpoint in contact.html to collect these directly instead.';
      status.dataset.state = 'success';
      return;
    }

    event.preventDefault();
    status.textContent = 'Sending…';
    status.removeAttribute('data-state');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then((response) => {
        if (response.ok) {
          status.textContent = 'Thank you — your submission has been received.';
          status.dataset.state = 'success';
          form.reset();
        } else {
          status.textContent = 'Something went wrong sending that. Please try again or email us directly.';
          status.dataset.state = 'error';
        }
      })
      .catch(() => {
        status.textContent = 'Something went wrong sending that. Please try again or email us directly.';
        status.dataset.state = 'error';
      });
  });
})();
