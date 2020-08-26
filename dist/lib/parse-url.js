"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absoluteUrl = exports.default = void 0;

var _default = url => {
  var defaultHost = 'http://localhost:3000';
  var defaultPath = '/api/auth';

  if (!url) {
    url = "".concat(defaultHost).concat(defaultPath);
  }

  var protocol = url.match(/^http?:\/\//) ? 'http' : 'https';
  url = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  var [_host, ..._path] = url.split('/');
  var baseUrl = _host ? "".concat(protocol, "://").concat(_host) : defaultHost;
  var basePath = _path.length > 0 ? "/".concat(_path.join('/')) : defaultPath;
  return {
    baseUrl,
    basePath
  };
};

exports.default = _default;

var absoluteUrl = (req, setLocalhost) => {
  var protocol = "https:";
  var host = req ? req.headers["x-forwarded-host"] || req.headers["host"] : window.location.host;

  if (host.indexOf("localhost") > -1 || host.indexOf(".local") > -1) {
    protocol = "http:";
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host
  };
};

exports.absoluteUrl = absoluteUrl;