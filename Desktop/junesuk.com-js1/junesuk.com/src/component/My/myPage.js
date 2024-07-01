import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/myPage.module.css";

export default function myPage() {
  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <div className={styles.myContent}>
          <div className={styles.buttonDiv}>
            <Link className={styles.btn} to="/"> {/* 회원가입 로그인 경로 수정해야함*/}
              <div>회원가입</div>
            </Link>
            <Link className={styles.btn} to="/">
              <div>로그인</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
