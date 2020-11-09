import React from "react";
import Container from "../components/container";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erro 404: Página Não Encontrada" />
    <Container>
      <h1>Página não encontrada.</h1>
      <br/>
      <img class="erro404" src="/404.png" alt="Imagem cartunizada de um monstro segurando o celular com erro 404"/>
    </Container>
  </Layout>
);

export default NotFoundPage;
