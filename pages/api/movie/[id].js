import { apiBase, apiKey } from "../../../lib/tmdb";

export default async function id(req, res) {
  const result = await fetch(
    `${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`
  );
  const json = await result.json();

  res.status(200).json({
    info: json,
  });
}
