import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Memobutton from "../memo/memobutton";

export default function Memo() {
  return (
    <div>
      <h3>레시피 추천</h3>
      <Memobutton />
      
    </div>
  );
}
