export default {
  async fetch(request) {
    let url = new URL(request.url).searchParams.get("u");
    if (!url) return new Response("missing ?u=", { status: 400 });

    let r = await fetch(url);
    let text = await r.text();

    return new Response(text, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  }
};
