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
  const products = await fetch(
    (DEV_API || process.env.PROD_API) + "/products"
  ).then((res) => res.json());
  res.json(products);
};

export default handler;
