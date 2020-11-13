import { Link } from "gatsby";
import React from "react";
import WorkPostPreview from "./work-post-preview";

import styles from "./blog-post-preview-grid.module.css";

function WorkPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <WorkPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Ver mais</Link>
        </div>
      )}
    </div>
  );
}

WorkPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default WorkPostPreviewGrid;
