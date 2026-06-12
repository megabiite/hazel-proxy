export default function handler(req, res) {
  res.status(200).json({ status: 'Hazel is running', service: 'NextGen Computers' });
}
