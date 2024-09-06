import React from "react";
import styled from "styled-components";

type Props = {
    // function, react prop, children
    onClick: () => void;
    component: React.ReactElement;
    children: React.ReactNode;
}

const StyledButton = styled.button`
    background-color: gray;
    text-align: center;
    color: white;
    border-radius: 4px;
    border: none;
    display: inline-block;

    &:hover {
    background-color: moss;
    }
`

export const CustomButton = ({ onClick, component, children }: Props) => {
    return (
        <>
            <StyledButton onClick={onClick} >{children}</StyledButton>
            {component}
        </>
    )
}