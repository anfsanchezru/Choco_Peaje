import styled from "styled-components";


// @media is to make it responsive to changes in size

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div;
    & > ul {
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
`;