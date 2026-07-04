const cache = new Map();

function set(key, value, ttl = 60000) {
  cache.set(key, {
    value,
    expire: Date.now() + ttl
  });
}

function get(key) {
  const data = cache.get(key);
  if (!data) return null;

  if (Date.now() > data.expire) {
    cache.delete(key);
    return null;
  }

  return data.value;
}

module.exports = { set, get };
