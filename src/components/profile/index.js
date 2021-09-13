import React from "react";
import * as S from './styled';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/35078514?v=4" alt="avatar user"
            />
            <S.WrapperInforUser>

                <div>
                    <h1>Jordano Baluz</h1>
                    <S.WrapperUserName>
                        <h3>username:</h3>
                        <a href="https://github.com/JordanoBaluz" target="_blank" rel="noreferrer">
                            baluz
                        </a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>followers</h4>
                        <span>5</span>
                    </div>

                </S.WrapperStatusCount>

            </S.WrapperInforUser>
        </S.Wrapper>
    )
}

export default Profile