type MethodOption = 'GET' | 'POST' | 'PUT' | 'DELETE'

export function makeRequest(
  method: MethodOption,
  endpoint: string,
  fetchOptions: RequestInit = {}
): Promise<Response> {
  const fetchConfig: RequestInit = { ...fetchOptions, method }
  const requestEndpoint = '/api' + endpoint

  return fetch(requestEndpoint, fetchConfig)
  // .then(res => {
  //   return res.json()
  // })
}
