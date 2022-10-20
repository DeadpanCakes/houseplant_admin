const DEV_API = process.env.DEV_API;
const API = DEV_API || process.env.DIST_API;

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res);
    case "PUT":
      return put(req, res);
    default:
      return res.status(400).json({ message: "Unsupported HTTP Method" });
  }
};

const get = async (req, res) => {
  const product = await fetch(API + "/products/" + req.query.id).then((res) =>
    res.json()
  );
  res.json(product);
};

const put = async (req, res) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ id: req.body._id, update: req.body }),
    headers: { "Content-Type": "application/json" },
  };
  const product = await fetch(API + "/products/" + req.query.id, options).then(
    (res) => res.json()
  );
  res.json(product);
};

export default handler;
