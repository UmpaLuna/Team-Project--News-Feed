import { deleteDoc, doc } from "@firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as St from "../../StyledComponents/modules/AddFormStyle/AddFormStyle";
import { auth, db } from "../../firebase/firebase";

export default function DetailForm({ DetailisOpen, setDetailIsopen, contents }) {
  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const foundData = post.filter((item) => item.uid === auth.currentUser.uid);
  const [editingText, setEditingText] = useState(foundData.contents);

  const onClickDeleteData = async () => {
    alert("삭제하시겠습니까?");
    const postRef = doc(db, "users", post.id);
    await deleteDoc(postRef);
  };

  if (user.currentUser) {
    return (
      <>
        {DetailisOpen ? (
          <St.Main>
            <St.Container>
              <St.Warpper onSubmit={(e) => e.preventDefault()}>
                <St.DetailUserInfo>
                  <St.AvatarFigure>
                    <img src={process.env.PUBLIC_URL + "/categoryimg/usericon.png"} />
                  </St.AvatarFigure>
                  <St.NickNameAndEmail>
                    <St.NickName>{auth.currentUser.displayName}</St.NickName>
                    <St.Email>{auth.currentUser.email}</St.Email>
                  </St.NickNameAndEmail>
                </St.DetailUserInfo>
                <St.TitleAndDate>
                  <St.Title>{foundData.text}</St.Title>
                  <St.AddDate>{foundData.Date}</St.AddDate>
                </St.TitleAndDate>
                <div>
                  <img src={process.env.PUBLIC_URL + "/headerimg/logo.png"} />
                </div>
                {isEditing ? (
                  <St.Content
                    defaultValue={foundData.contents}
                    value={editingText}
                    onChange={(e) => {
                      setEditingText(e.target.value);
                    }}
                  />
                ) : (
                  <St.DetailContent>{foundData.contents}</St.DetailContent>
                )}

                {isEditing ? (
                  <St.Buttons>
                    <button type="button">수정 완료</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                      취소
                    </button>
                  </St.Buttons>
                ) : (
                  <St.Buttons>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      수정
                    </button>
                    <button type="button" onClick={() => onClickDeleteData(foundData.id)}>
                      삭제
                    </button>
                    <button type="button" onClick={() => setDetailIsopen(false)}>
                      홈으로
                    </button>
                  </St.Buttons>
                )}
              </St.Warpper>
            </St.Container>
          </St.Main>
        ) : null}
      </>
    );
  } else if (!user.currentUser) {
    return (
      <>
        {DetailisOpen ? (
          <St.Main>
            <St.Container>
              <St.Warpper onSubmit={(e) => e.preventDefault()}>
                <St.DetailUserInfo>
                  <St.AvatarFigure>
                    <img src={process.env.PUBLIC_URL + "/categoryimg/usericon.png"} />
                  </St.AvatarFigure>
                  <St.NickNameAndEmail>
                    <St.NickName>{auth.currentUser.displayName}</St.NickName>
                    <St.Email>{auth.currentUser.email}</St.Email>
                  </St.NickNameAndEmail>
                </St.DetailUserInfo>
                <St.TitleAndDate>
                  <St.Title>{foundData.text}</St.Title>
                  <St.AddDate>{foundData.Date}</St.AddDate>
                </St.TitleAndDate>
                <div>
                  <img src={process.env.PUBLIC_URL + "/headerimg/logo.png"} />
                </div>
                <St.DetailContent>{foundData.contents}</St.DetailContent>
                <St.Buttons>
                  <button type="button" onClick={() => setDetailIsopen(false)}>
                    홈으로
                  </button>
                </St.Buttons>
              </St.Warpper>
            </St.Container>
          </St.Main>
        ) : null}
      </>
    );
  }
}
