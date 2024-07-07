import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/writebutton.module.css";
import { useNavigate } from "react-router-dom";


function DiaryButton() {
  return (
    <>
      <div className={styles.my}>
        <Link to="/diarywrite">
          <div className={styles.menuDiv}>
            <div className={styles.content}>
              <span>+일기장 작성하기</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DiaryButton;
