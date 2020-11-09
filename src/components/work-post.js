import React from "react";
import Img from "gatsby-image";
import { buildImageObj, localImage } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";

import styles from "./blog-post.module.css";

function WorkPost(props) {
  // console.log(props);
  const { _rawBody, title, mainImage } = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <Img className={styles.mainImage} fluid={localImage(props)} />
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </article>
  );
}

export default WorkPost;
