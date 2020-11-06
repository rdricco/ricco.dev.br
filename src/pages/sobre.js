import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <h1>Sobre</h1>
    <p>A rota não existe, tente novamente.</p>
  </Layout>
);

export default NotFoundPage;
