import React from "react";
import * as S from "./styled";

function Layout({ children }) {
    return (
        <S.WrapperLayout>
            <header>
                HEADER
            </header>
            {children}

        </S.WrapperLayout>
    )
}

export default Layout;