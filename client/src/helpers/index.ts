export async function streamFileToApi(file: File, apiUri: string) {
  const formData = new FormData();
  formData.append("file", file);

  // todo: Authorization?
  const headers = new Headers();

  const request = new Request(apiUri, {
    method: "POST",
    headers,
    body: formData,
  });

  const response = await fetch(request);

  return response;
}
