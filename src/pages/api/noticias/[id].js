import { noticias } from "./noticias"
export default function handler(req, res) {
  console.log(req.query.id)

  const encontrado = noticias.find((noticia) =>
    noticia.idnoticia.toString() === req.query.id);
  
  console.log(!encontrado)

  if (!encontrado) {
    return res.status(404).json({ error: "Noticia não encontrada" });
  } 
  res.status(200).json(encontrado);
}