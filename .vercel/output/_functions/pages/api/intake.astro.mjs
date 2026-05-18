import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
const POST = async ({ request }) => {
  const json = (data, status = 200) => new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, errors: { _: "JSON inválido." } }, 400);
  }
  if (body.website) {
    return json({ ok: true });
  }
  const fields = ["situacion", "riesgo", "realidad"];
  const errors = {};
  for (const f of fields) {
    if (String(body[f] ?? "").trim().length < 20) {
      errors[f] = "Mínimo 20 caracteres.";
    }
  }
  if (Object.keys(errors).length) {
    return json({ ok: false, errors }, 422);
  }
  const situacion = String(body.situacion).trim();
  const riesgo = String(body.riesgo).trim();
  const realidad = String(body.realidad).trim();
  const ts = (/* @__PURE__ */ new Date()).toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "long",
    timeStyle: "short"
  });
  const row = (label, value) => `
    <tr>
      <td style="padding:24px 32px;border-bottom:1px solid #1e2a38;">
        <p style="margin:0 0 6px;color:#9aabba;font-size:11px;text-transform:uppercase;letter-spacing:.1em;">${label}</p>
        <p style="margin:0;color:#f0eae0;font-size:15px;line-height:1.65;">${value.replace(/\n/g, "<br>")}</p>
      </td>
    </tr>`;
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#040608;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#040608;padding:40px 20px;">
<tr><td>
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#111820;border:1px solid #1e2a38;border-radius:12px;overflow:hidden;">
  <tr>
    <td style="padding:28px 32px;border-bottom:1px solid #1e2a38;">
      <p style="margin:0 0 6px;color:#d4e847;font-size:11px;text-transform:uppercase;letter-spacing:.12em;font-family:Arial,sans-serif;">huhuGERMAN · Intake</p>
      <h1 style="margin:0 0 6px;color:#f0eae0;font-size:22px;font-weight:700;">Nuevo caso recibido</h1>
      <p style="margin:0;color:#9aabba;font-size:13px;">${ts} · Ciudad de México</p>
    </td>
  </tr>
  ${row("Situación concreta", situacion)}
  ${row("Riesgo real", riesgo)}
  <tr>
    <td style="padding:24px 32px;">
      <p style="margin:0 0 6px;color:#9aabba;font-size:11px;text-transform:uppercase;letter-spacing:.1em;">Brecha actual</p>
      <p style="margin:0;color:#f0eae0;font-size:15px;line-height:1.65;">${realidad.replace(/\n/g, "<br>")}</p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body></html>`;
  try {
    await resend.emails.send({
      from: "no-reply@huhugerman.com",
      to: "yassergandhi.dev@gmail.com",
      subject: "[huhuGERMAN] Nuevo intake",
      html
    });
  } catch (err) {
    console.error("Resend error:", err);
    return json({ ok: false, errors: { _: "Error al enviar." } }, 500);
  }
  return json({ ok: true });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
