// Simple universal (client/server) function to split host and path
// We use this rather than a library because we need to use the same logic both
// client and server side and we only need to parse out the host and path, while
// supporting a default value, so a simple split is sufficent.
export default (url) => {
  // Default values
  const defaultHost = 'http://localhost:3000'
  const defaultPath = '/api/auth'

  if (!url) { url = `${defaultHost}${defaultPath}` }

  // Default to HTTPS if no protocol explictly specified
  const protocol = url.match(/^http?:\/\//) ? 'http' : 'https'

  // Normalize URLs by stripping protocol and no trailing slash
  url = url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  // Simple split based on first /
  const [_host, ..._path] = url.split('/')
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost
  const basePath = _path.length > 0 ? `/${_path.join('/')}` : defaultPath

  return {
    baseUrl,
    basePath
  }
}

export const absoluteUrl = (req, setLocalhost) => {
  var protocol = "https:"
  var host = req
    ? req.headers["x-forwarded-host"] || req.headers["host"]
    : window.location.host

  if (host.indexOf("localhost") > -1 || host.indexOf(".local") > -1) {
    // if (setLocalhost) host = setLocalhost
    protocol = "http:"
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host,
  }
}