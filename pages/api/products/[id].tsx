const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res);
    default:
      return res.status(400).json({ message: "Unsupported HTTP Method" });
  }
};

const get = async (req, res) => {
  const DEV_API = process.env.DEV_API;
  const product = await fetch(
    (DEV_API || process.env.DIST_API) + "/products/" + req.query.id
  ).then((res) => res.json());
  res.json(product);
};

export default handler;
