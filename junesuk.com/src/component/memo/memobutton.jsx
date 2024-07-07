import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/writebutton.module.css";
import { useNavigate } from "react-router-dom";


function WriteButton() {
  return (
    <>
      <div className={styles.my}>
        <Link to="/memowrite">
          <div className={styles.menuDiv}>
            <div className={styles.content}>
              <span>+메모 작성하기</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default WriteButton;
