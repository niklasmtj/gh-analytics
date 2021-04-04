; (async () => {
  const host = window.location;

  const data = { pathName: host.pathname }
  const res = await fetch("http://localhost:3000/analytics", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
})()