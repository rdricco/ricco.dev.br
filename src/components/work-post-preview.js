import { format } from "date-fns";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { buildImageObj, localImage, cn, getWorkUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  const { mainImage } = props;
  const { asset } = mainImage;
  const { localFile } = asset;
  const { childImageSharp } = localFile;
  const { fluid } = childImageSharp;
  const { src } = fluid;
  // const ImagemLocal = Imagem.localFile;
  // const UrlImagemLocal = ImagemLocal.childImageSharp;
  // console.log(src);

  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getWorkUrl(props.publishedAt, props.slug.current)}
    >
      {/* <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div> */}
      {props.mainImage && props.mainImage.asset && (
        <Img className={styles.leadMediaThumb} fluid={localImage(props)} />
      )}
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{format(props.publishedAt, "DD/MM/YYYY")}</div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
