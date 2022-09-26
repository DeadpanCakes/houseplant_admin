const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return get(req, res);
    default:
      return res.status(400).json({ message: "Unsupported HTTP Method" });
  }
};

const get = async (req, res) => {
  console.log("reached");
  const DEV_API = process.env.DEV_API;
  const categories = await fetch(
    (DEV_API || process.env.PROD_API) + "/categories"
  ).then((res) => res.json());
  res.json(categories);
};

export default handler;
