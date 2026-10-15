export async function onRequest(context) {
  const url = new URL(context.request.url);
  const resource = url.searchParams.get("resource");

  if (resource === "acct:me@alizard.gay") {
    const targetUrl = new URL("/.well-known/webfinger-private.json", url.origin);
    const assetResponse = await fetch(targetUrl);
    
    return new Response(assetResponse.body, {
      status: 200,
      headers: {
        "Content-Type": "application/jrd+json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }

  return new Response("Not Found", { status: 404 });
}
