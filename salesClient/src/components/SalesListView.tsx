import styled from "styled-components";

import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { Colors } from "../styles/defaultProps";
import { useState } from "react";
import { EditInput } from "../styles/generalStyles";

export const TH = styled.th`
  padding: 0.5rem;
`;

export const IconList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export const IconButton = styled.div`
  color: ${Colors.regularColor};
  cursor: pointer;
  :hover {
    color: ${Colors.secundaryfontColor};
  }
`;

export default function RegularRow() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // setFormInputs({
    //   ...formInputs,
    //   [e.target.name]: value,
    // });
  }

  const deleteUser = (id: string) => {};

  const saveEditUser = () => {};

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <TH>Generic text</TH>
      <TH>Generic text</TH>
      <TH>
        <IconList>
          <IconButton onClick={() => {}}>
            <FaEdit />
          </IconButton>

          <IconButton>
            <FaTrash onClick={() => {}} />
          </IconButton>
        </IconList>
      </TH>
    </>
  );
}
