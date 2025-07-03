import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
export async function getServerSideProps(req) {
    console.log(req.query);
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/noticias/');
  const repo = await res.json();

  // Pass data to the page via props
  return { props: { noticia: repo } };
}
export default function Page({noticia}) {
    const router = useRouter()
    return <>
        <Container className="text-center">
            <Cards idnoticia={noticia.idnoticia}
                conteudonoticia={noticia.conteudonoticia}
                titulonoticia={noticia.titulonoticia}
                datahoracadastro={noticia.datahoracadastro}
                tiponoticia={noticia.tiponoticia} 
                />
        </Container>
    </>
}