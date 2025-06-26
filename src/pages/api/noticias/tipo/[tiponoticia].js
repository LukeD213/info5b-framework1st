import { noticias } from "../noticias"
export default function handler(req, res) {
  const encontrado = noticias.filter((noticia) =>
    noticia.tiponoticia.toString() === req.query.tiponoticia);
  if (!encontrado) {
    return res.status(404).json({ error: "Noticia não encontrada" });
  } 
  res.status(200).json(encontrado);
}