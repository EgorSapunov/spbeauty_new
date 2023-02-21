import styled from "styled-components";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

const ListContainer = styled.div`
    outline: none;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    background-color: #fff;
    opacity: 100%
`;

function Addresses() {
    return (
        <ListContainer className='d-inline-flex flex-column gap-4 p-4 col justify-content-between'>
            <div className='d-inline-flex flex-column'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column pt-2 pb-2 gap-2 mt-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </ListContainer>
    );
}

export default Addresses;